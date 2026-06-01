import { NextResponse } from 'next/server';
import { sendEmail } from '@/lib/utils/emailService';

export async function GET() {
  const apiKey = (process.env.RESEND_API_KEY || '').trim();
  const from = (process.env.EMAIL_FROM || '').trim();
  const to = (process.env.CONTACT_RECEIVER_EMAIL || '').trim();

  const config = {
    RESEND_API_KEY: apiKey ? `✅ set (${apiKey.length} chars)` : '❌ NOT SET',
    EMAIL_FROM: from ? `✅ ${from}` : '❌ NOT SET',
    CONTACT_EMAIL: to ? `✅ ${to}` : '❌ NOT SET',
  };

  if (!from) {
    return NextResponse.json(
      {
        status: 'misconfigured',
        message: '❌ EMAIL_FROM not set.',
        config,
      },
      { status: 500 }
    );
  }

  try {
    const result = await sendEmail({
      to: to || from,
      subject: '✅ Email Test — Innovation Dynamics Group',
      html: `<h3>Email is working!</h3><p>Server time: ${new Date().toISOString()}</p>`,
      text: 'Email config is working!',
    });
    return NextResponse.json({
      status: 'ok',
      message: '✅ Test email sent!',
      messageId: result.messageId,
      config,
    });
  } catch (err) {
    return NextResponse.json(
      {
        status: 'send_failed',
        message: `❌ Config loaded but send failed: ${err.message}`,
        config,
      },
      { status: 500 }
    );
  }
}
