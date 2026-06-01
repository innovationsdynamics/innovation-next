'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { sendRegistrationOTP, verifyRegistrationOTP } from '../redux/actions/userActions';
import { User, Mail, Lock, AlertCircle, KeyRound, CheckCircle2 } from 'lucide-react';

const Signup = () => {
    const [step, setStep] = useState(1); // 1: Details, 2: OTP
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [otp, setOtp] = useState('');

    const dispatch = useDispatch();
    const router = useRouter();

    useEffect(() => {
        document.title = 'Sign Up • Innovation Dynamics';
        const desc = document.querySelector('meta[name="description"]');
        if (desc) desc.setAttribute('content', 'Create an account at Innovation Dynamics to shop printers and supplies.');
        else {
            const m = document.createElement('meta');
            m.name = 'description';
            m.content = 'Create an account at Innovation Dynamics to shop printers and supplies.';
            document.head.appendChild(m);
        }
    }, []);

    const userSendOTP = useSelector((state) => state.userSendOTP);
    const { loading: loadingSendOTP, error: errorSendOTP, success: successSendOTP } = userSendOTP;

    const userVerifyOTP = useSelector((state) => state.userVerifyOTP);
    const { loading: loadingVerifyOTP, error: errorVerifyOTP, success: successVerifyOTP } = userVerifyOTP;

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo: userLoginInfo } = userLogin;

    useEffect(() => {
        if (userLoginInfo) {
            router.push('/');
        }
    }, [router, userLoginInfo]);

    useEffect(() => {
        if (successSendOTP) {
            setStep(2);
        }
    }, [successSendOTP]);

    useEffect(() => {
        if (successVerifyOTP) {
            router.push('/login?message=Successfully Verified. Please Login.');
        }
    }, [successVerifyOTP, router]);

    const handleSendOTP = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        dispatch(sendRegistrationOTP(firstName, lastName, email, password));
    };

    const handleVerifyOTP = (e) => {
        e.preventDefault();
        dispatch(verifyRegistrationOTP(email, otp));
    };

    return (
        <div className="min-h-screen pt-32 pb-24 flex flex-col items-center justify-center bg-[#F8F9FA]">
            <div className="w-full max-w-md bg-white p-12 rounded-sm shadow-2xl border-t-8 border-black">
                {step === 1 ? (
                    <>
                        <div className="text-center mb-10">
                            <h1 className="text-3xl font-bold text-black mb-3 tracking-tight leading-tight">Create Account</h1>
                        </div>

                        {errorSendOTP && (
                            <div className="mb-6 p-4 bg-red-50 border border-red-100 rounded-sm text-red-700 flex items-center gap-3 text-xs font-medium shadow-sm">
                                <AlertCircle size={18} className="text-red-500" />
                                <span>{errorSendOTP}</span>
                            </div>
                        )}

                        <form onSubmit={handleSendOTP} className="space-y-5">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-semibold text-[#024ad8] uppercase tracking-wider mb-2">First Name</label>
                                    <div className="relative group">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                            <User size={16} className="text-gray-300 group-focus-within:text-[#024ad8] transition-colors" />
                                        </div>
                                        <input
                                            type="text"
                                            required
                                            value={firstName}
                                            onChange={(e) => setFirstName(e.target.value)}
                                            className="block w-full pl-11 pr-4 py-3.5 border border-gray-200 rounded-sm bg-gray-50/50 text-sm font-medium tracking-normal focus:outline-none focus:border-[#024ad8] focus:bg-white transition-all placeholder:text-gray-300"
                                            placeholder="John"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-[#024ad8] uppercase tracking-wider mb-2">Last Name</label>
                                    <div className="relative group">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                            <User size={16} className="text-gray-300 group-focus-within:text-[#024ad8] transition-colors" />
                                        </div>
                                        <input
                                            type="text"
                                            required
                                            value={lastName}
                                            onChange={(e) => setLastName(e.target.value)}
                                            className="block w-full pl-11 pr-4 py-3.5 border border-gray-200 rounded-sm bg-gray-50/50 text-sm font-medium tracking-normal focus:outline-none focus:border-[#024ad8] focus:bg-white transition-all placeholder:text-gray-300"
                                            placeholder="Doe"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-[#024ad8] uppercase tracking-wider mb-2">Email</label>
                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <Mail size={16} className="text-gray-300 group-focus-within:text-[#024ad8] transition-colors" />
                                    </div>
                                    <input
                                        type="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="block w-full pl-11 pr-4 py-3.5 border border-gray-200 rounded-sm bg-gray-50/50 text-sm font-medium tracking-normal focus:outline-none focus:border-[#024ad8] focus:bg-white transition-all placeholder:text-gray-300"
                                        placeholder="name@domain.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-[#024ad8] uppercase tracking-wider mb-2">Password</label>
                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <Lock size={16} className="text-gray-300 group-focus-within:text-[#024ad8] transition-colors" />
                                    </div>
                                    <input
                                        type="password"
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="block w-full pl-11 pr-4 py-3.5 border border-gray-200 rounded-sm bg-gray-50/50 text-sm font-medium tracking-normal focus:outline-none focus:border-[#024ad8] focus:bg-white transition-all placeholder:text-gray-300"
                                        placeholder="••••••••"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-[#024ad8] uppercase tracking-wider mb-2">Confirm Password</label>
                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <Lock size={16} className="text-gray-300 group-focus-within:text-[#024ad8] transition-colors" />
                                    </div>
                                    <input
                                        type="password"
                                        required
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        className="block w-full pl-11 pr-4 py-3.5 border border-gray-200 rounded-sm bg-gray-50/50 text-sm font-medium tracking-normal focus:outline-none focus:border-[#024ad8] focus:bg-white transition-all placeholder:text-gray-300"
                                        placeholder="••••••••"
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={loadingSendOTP}
                                className="w-full flex justify-center py-4 px-8 bg-black text-white font-bold rounded-sm shadow-lg shadow-black/10 text-sm uppercase tracking-wider hover:bg-gray-800 transition-all disabled:opacity-30 hover:-translate-y-0.5"
                            >
                                {loadingSendOTP ? 'Sending OTP...' : 'Continue'}
                            </button>
                        </form>
                    </>
                ) : (
                    <>
                        <div className="text-center mb-10">
                            <div className="w-20 h-20 bg-[#F8F9FA] border border-gray-100 rounded-sm flex items-center justify-center mx-auto mb-6 shadow-sm">
                                <Mail size={36} className="text-[#024ad8]" />
                            </div>
                            <h1 className="text-3xl font-bold text-black mb-3 tracking-tight leading-tight">Verify Your Email</h1>
                            <p className="text-xs font-medium text-gray-400 tracking-wide">Enter the code sent to:</p>
                            <p className="text-sm font-semibold text-[#024ad8] mt-2">{email}</p>
                        </div>

                        {errorVerifyOTP && (
                            <div className="mb-6 p-4 bg-red-50 border border-red-100 rounded-sm text-red-700 flex items-center gap-3 text-xs font-medium shadow-sm">
                                <AlertCircle size={18} className="text-red-500" />
                                <span>{errorVerifyOTP}</span>
                            </div>
                        )}

                        <form onSubmit={handleVerifyOTP} className="space-y-8">
                            <div>
                                <label className="block text-xs font-semibold text-[#024ad8] uppercase tracking-wider mb-4 text-center">Verification Code</label>
                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                                        <KeyRound size={24} className="text-gray-200" />
                                    </div>
                                    <input
                                        type="text"
                                        required
                                        maxLength="6"
                                        value={otp}
                                        onChange={(e) => setOtp(e.target.value)}
                                        className="block w-full pl-16 pr-6 py-5 border border-gray-200 rounded-sm bg-gray-50/50 text-3xl tracking-[0.5em] font-bold text-center focus:outline-none focus:border-[#024ad8] focus:bg-white transition-all placeholder:text-gray-200"
                                        placeholder="000000"
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={loadingVerifyOTP || otp.length < 6}
                                className="w-full flex justify-center py-4 px-8 bg-[#024ad8] text-white font-bold rounded-sm shadow-lg shadow-[#024ad8]/20 text-sm uppercase tracking-wider hover:bg-[#0133a1] transition-all disabled:opacity-30 hover:-translate-y-0.5"
                            >
                                {loadingVerifyOTP ? 'Verifying...' : 'Verify & Register'}
                            </button>

                            <div className="text-center">
                                <button
                                    type="button"
                                    onClick={() => setStep(1)}
                                    className="text-xs font-medium text-gray-400 hover:text-black transition-colors border-b border-transparent hover:border-gray-200 pb-1"
                                >
                                    Go back & edit details
                                </button>
                            </div>
                        </form>
                    </>
                )}

                <div className="mt-10 text-center border-t border-gray-100 pt-8">
                    <p className="text-sm font-medium text-gray-400">
                        Already have an account?{' '}
                        <Link href="/login" className="text-[#024ad8] font-semibold hover:underline ml-1">
                            Sign In
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Signup;
