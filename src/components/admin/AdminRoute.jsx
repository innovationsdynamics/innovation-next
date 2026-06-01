'use client';

import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

export default function AdminRoute({ children }) {
    const router = useRouter();
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    useEffect(() => {
        if (!userInfo?.isAdmin) {
            router.replace('/admin/login');
        }
    }, [userInfo, router]);

    if (!userInfo?.isAdmin) return null;
    return children;
}
