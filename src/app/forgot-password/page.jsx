import ForgotPassword from '@/views/ForgotPassword';

export const metadata = {
	title: 'Forgot Password • Innovation Dynamics',
	description: 'Reset your Innovation Dynamics account password via OTP sent to your email.',
	keywords: 'forgot password, reset password, otp'
};

export default function Page() { return <ForgotPassword />; }
