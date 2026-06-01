'use client';

import { useEffect, useRef, useCallback } from 'react';
import Pusher from 'pusher-js';
import { isPusherConfigured } from '@/lib/realtime/pusher-client';

export function useAdminRealtime({ userInfo, onEvent, pollInterval = 30000 }) {
  const pusherRef = useRef(null);
  const channelRef = useRef(null);
  const pollRef = useRef(null);

  const handleEvent = useCallback(
    (event, data) => {
      if (onEvent) onEvent(event, data);
    },
    [onEvent]
  );

  useEffect(() => {
    if (!userInfo?.isAdmin || !userInfo?.token) return undefined;

    const pusherKey = process.env.NEXT_PUBLIC_PUSHER_KEY;
    const pusherCluster = process.env.NEXT_PUBLIC_PUSHER_CLUSTER;

    if (pusherKey && pusherCluster && isPusherConfigured()) {
      const pusher = new Pusher(pusherKey, {
        cluster: pusherCluster,
        authEndpoint: '/api/pusher/auth',
        auth: {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
          },
        },
      });

      pusherRef.current = pusher;
      const channel = pusher.subscribe('admin-channel');
      channelRef.current = channel;

      ['new-order', 'new-user', 'new-chat', 'new-message'].forEach((event) => {
        channel.bind(event, (data) => handleEvent(event, data));
      });

      return () => {
        channel.unbind_all();
        pusher.unsubscribe('admin-channel');
        pusher.disconnect();
      };
    }

    pollRef.current = setInterval(() => {
      handleEvent('poll', { time: new Date() });
    }, pollInterval);

    return () => {
      if (pollRef.current) clearInterval(pollRef.current);
    };
  }, [userInfo, handleEvent, pollInterval]);

  return { isPolling: !process.env.NEXT_PUBLIC_PUSHER_KEY };
}

export function useChatRealtime({ chatId, userInfo, onMessage, onTyping }) {
  const pusherRef = useRef(null);

  useEffect(() => {
    if (!chatId || !userInfo?.token) return undefined;

    const pusherKey = process.env.NEXT_PUBLIC_PUSHER_KEY;
    const pusherCluster = process.env.NEXT_PUBLIC_PUSHER_CLUSTER;

    if (!pusherKey || !pusherCluster) return undefined;

    const pusher = new Pusher(pusherKey, {
      cluster: pusherCluster,
      authEndpoint: '/api/pusher/auth',
      auth: {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      },
    });

    pusherRef.current = pusher;
    const channel = pusher.subscribe(`chat-${chatId}`);

    channel.bind('new-message', (data) => onMessage?.(data));
    channel.bind('user-typing', (data) => onTyping?.(data));

    return () => {
      channel.unbind_all();
      pusher.unsubscribe(`chat-${chatId}`);
      pusher.disconnect();
    };
  }, [chatId, userInfo, onMessage, onTyping]);
}
