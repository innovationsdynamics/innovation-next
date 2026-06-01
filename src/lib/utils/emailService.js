'use strict';

const nodemailer = require('nodemailer');
const axios      = require('axios');
require('dotenv').config();

// ─────────────────────────────────────────────────────────────────────────────
//  EMAIL SERVICE  —  Brevo SMTP (primary) + Brevo HTTP API (fallback)
//
//  Render Environment Variables to set in Render Dashboard:
//    EMAIL_HOST     = smtp-relay.brevo.com
//    EMAIL_PORT     = 587
//    EMAIL_SECURE   = false
//    EMAIL_USER     = a60a72001@smtp-brevo.com
//    EMAIL_PASS     = xsmtpsib-xxxxxxxxxxxx  (your Brevo SMTP key)
//    EMAIL_FROM     = no-reply@innovationdynamicsgroup.com
//    CONTACT_RECEIVER_EMAIL = support@innovationdynamicsgroup.com
//    BREVO_API_KEY  = xkeysib-xxxxxxxxxxxx   (fallback — Brevo HTTP API key)
// ─────────────────────────────────────────────────────────────────────────────

// ── Log config status on startup ─────────────────────────────────────────────
const logEnvStatus = () => {
    const smtpOk = !!(process.env.EMAIL_HOST && process.env.EMAIL_USER && process.env.EMAIL_PASS);
    const apiOk  = !!(process.env.BREVO_API_KEY || '').trim();
    console.log(
        `[EmailService] SMTP=${smtpOk ? '✅' : '❌ MISSING'} | ` +
        `BREVO_API_KEY=${apiOk ? '✅' : '⚠️  not set (fallback disabled)'}`
    );
    if (!smtpOk) {
        console.warn('[EmailService] ⚠️  EMAIL_HOST / EMAIL_USER / EMAIL_PASS missing from environment!');
        console.warn('[EmailService]    Add these to Render Dashboard → Environment.');
    }
};
logEnvStatus();

// ── Strategy 1: Brevo SMTP via Nodemailer (primary) ──────────────────────────
const sendViaSMTP = async ({ to, subject, html, text, from, replyTo }) => {
    const host     = (process.env.EMAIL_HOST   || '').trim();
    const port     = parseInt(process.env.EMAIL_PORT || '587', 10);
    const secure   = process.env.EMAIL_SECURE === 'true';
    const user     = (process.env.EMAIL_USER   || '').trim();
    const pass     = (process.env.EMAIL_PASS   || '').trim();
    const fromAddr = (from || process.env.EMAIL_FROM || 'no-reply@innovationdynamicsgroup.com').trim();

    if (!host || !user || !pass) {
        throw new Error(
            'SMTP config missing. Set EMAIL_HOST, EMAIL_USER, EMAIL_PASS in Render environment variables.'
        );
    }

    const transporter = nodemailer.createTransport({
        host,
        port,
        secure,
        auth: { user, pass },
        tls: { rejectUnauthorized: false },
    });

    console.log(`📤 [SMTP] Sending → ${to} | From: ${fromAddr} | Subject: ${subject}`);

    const info = await transporter.sendMail({
        from:    fromAddr,
        to:      to.trim(),
        subject,
        ...(html    && { html }),
        ...(text    && { text }),
        ...(replyTo && { replyTo }),
    });

    console.log(`✅ [SMTP] Sent! MessageId: ${info.messageId}`);
    return { messageId: info.messageId, provider: 'brevo-smtp' };
};

// ── Strategy 2: Brevo HTTP API (fallback if SMTP fails) ───────────────────────
const sendViaBrevoAPI = async ({ to, subject, html, text, from, replyTo }) => {
    const apiKey   = (process.env.BREVO_API_KEY || '').trim();
    const fromAddr = (from || process.env.EMAIL_FROM || 'no-reply@innovationdynamicsgroup.com').trim();

    if (!apiKey) {
        throw new Error('BREVO_API_KEY not set — HTTP API fallback unavailable.');
    }

    const payload = {
        sender:      { email: fromAddr, name: 'Innovation Dynamics Group' },
        to:          [{ email: to.trim() }],
        subject,
        htmlContent: html || `<p>${text || ''}</p>`,
        ...(text    && { textContent: text }),
        ...(replyTo && { replyTo: { email: replyTo } }),
    };

    console.log(`📤 [Brevo API] Sending → ${to} | Subject: ${subject}`);

    try {
        const response = await axios.post('https://api.brevo.com/v3/smtp/email', payload, {
            headers: {
                'api-key':      apiKey,
                'Content-Type': 'application/json',
                'Accept':       'application/json',
            },
            timeout: 15000,
        });
        console.log(`✅ [Brevo API] Sent! MessageId: ${response.data.messageId}`);
        return { messageId: response.data.messageId, provider: 'brevo-api' };
    } catch (err) {
        const status  = err.response?.status;
        const message = err.response?.data?.message || err.message;
        console.error(`❌ [Brevo API] HTTP ${status}: ${message}`);
        console.error(`   Full response:`, JSON.stringify(err.response?.data, null, 2));
        throw new Error(`Brevo API error [${status}]: ${message}`);
    }
};

// ── Core sendEmail — SMTP first, HTTP API fallback ────────────────────────────
const sendEmail = async (options) => {
    // Try SMTP first (Brevo SMTP, port 587 — works on Render)
    try {
        return await sendViaSMTP(options);
    } catch (smtpErr) {
        console.error(`❌ [SMTP] Failed: ${smtpErr.message}`);

        // Fallback to Brevo HTTP API if API key is available
        const hasApiKey = !!(process.env.BREVO_API_KEY || '').trim();
        if (hasApiKey) {
            console.warn('⚠️  [EmailService] Falling back to Brevo HTTP API...');
            return await sendViaBrevoAPI(options);
        }

        // Both methods failed — re-throw the original SMTP error
        throw smtpErr;
    }
};

// ── OTP Generator ─────────────────────────────────────────────────────────────
const generateOTP = () => Math.floor(100000 + Math.random() * 900000).toString();

// ── OTP Email ─────────────────────────────────────────────────────────────────
const sendOTPEmail = async (email, otp, type = 'registration') => {
    const isReg = type === 'registration';

    const subject = isReg
        ? 'Verify Your Account - Innovation Dynamics Group'
        : 'Reset Your Password - Innovation Dynamics Group';

    const html = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: linear-gradient(135deg, #1e40af 0%, #0d9488 100%);
                        padding: 40px 20px; text-align: center; border-radius: 10px 10px 0 0;">
                <h1 style="color: white; margin: 0; font-size: 28px;">Innovation Dynamics Group</h1>
                <p style="color: white; margin: 10px 0 0; opacity: 0.9;">
                    ${isReg ? 'Account Verification' : 'Password Reset'}
                </p>
            </div>
            <div style="background: white; padding: 40px 30px; border-radius: 0 0 10px 10px;
                        box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                <h2 style="color: #333; margin-top: 0;">
                    ${isReg ? 'Verify Your Account' : 'Reset Your Password'}
                </h2>
                <p style="color: #666; font-size: 16px; line-height: 1.6;">Hello!</p>
                <p style="color: #666; font-size: 16px; line-height: 1.6;">
                    ${isReg
                        ? 'Thank you for registering with Innovation Dynamics Group. Your OTP code is:'
                        : 'We received a request to reset your password. Your OTP code is:'}
                </p>
                <div style="background-color: #f8f9fa; border: 2px dashed #1e40af;
                            padding: 24px; text-align: center; margin: 24px 0; border-radius: 8px;">
                    <span style="font-size: 40px; font-weight: bold; color: #1e40af;
                                 letter-spacing: 12px; font-family: 'Courier New', monospace;">
                        ${otp}
                    </span>
                </div>
                <p style="color: #666; font-size: 14px; margin-bottom: 24px;">
                    This code will expire in <strong>10 minutes</strong>.
                </p>
                <div style="background-color: #fff3cd; border: 1px solid #ffeaa7;
                            padding: 15px; border-radius: 5px; margin-top: 20px;">
                    <p style="color: #856404; margin: 0; font-size: 14px;">
                        <strong>Security Notice:</strong>
                        If you didn't request this, please ignore this email.
                    </p>
                </div>
                <div style="text-align: center; margin-top: 30px; padding-top: 20px;
                            border-top: 1px solid #eee;">
                    <p style="color: #999; font-size: 12px; margin: 0;">
                        Automated message from Innovation Dynamics Group. Do not reply.
                    </p>
                </div>
            </div>
        </div>
    `;

    return await sendEmail({ to: email, subject, html });
};

module.exports = { generateOTP, sendOTPEmail, sendEmail };
