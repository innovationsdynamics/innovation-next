'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/actions/userActions';
import { Mail, Lock, AlertCircle, Shield } from 'lucide-react';
import Link from 'next/link';
import { useAuth } from '../context/AuthContext';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isAdminLogin, setIsAdminLogin] = useState(false);

    const dispatch = useDispatch();
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const { setUser } = useAuth();

    const userLogin = useSelector((state) => state.userLogin);
    const { loading, error, userInfo } = userLogin;

    const [successMessage, setSuccessMessage] = useState('');

    // Parse query params safely
    const redirect = searchParams.get('redirect');
    const messageParam = searchParams.get('message');

    useEffect(() => {
        if (messageParam) {
            setSuccessMessage(messageParam);
        }
    }, [messageParam]);

    useEffect(() => {
        document.title = 'Sign In • Innovation Dynamics';
        const desc = document.querySelector('meta[name="description"]');
        if (desc) desc.setAttribute('content', 'Sign in to your Innovation Dynamics account to manage orders and purchases.');
        else {
            const m = document.createElement('meta');
            m.name = 'description';
            m.content = 'Sign in to your Innovation Dynamics account to manage orders and purchases.';
            document.head.appendChild(m);
        }
    }, []);

useEffect(() => {
    if (userInfo) {
        setUser(userInfo); // Sync AuthContext with Redux
        setSuccessMessage('Logged In Successfully');

        const timer = setTimeout(() => {
            if (redirect) {
                window.location.href = `/${redirect}`;
            } else if (userInfo.isAdmin && isAdminLogin) {
                window.location.href = '/admin/dashboard';
            } else {
                const from = (typeof window !== 'undefined' && sessionStorage.getItem('loginRedirect')) || '/';
                window.location.href = from;
            }
        }, 1500);

        return () => clearTimeout(timer);
    }
}, [userInfo, redirect, isAdminLogin, setUser]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) return;
        dispatch(login(email, password, isAdminLogin));
    };

    return (
        <div className="min-h-screen pt-32 pb-24 flex flex-col items-center justify-center bg-[#F8F9FA]">
            <div className={`w-full max-w-md bg-white p-12 rounded-sm shadow-2xl border-t-8 transition-all duration-500 ${isAdminLogin ? 'border-[#024ad8]' : 'border-black'}`}>
                <div className="text-center mb-12">
                    <h1 className="text-3xl font-bold text-black mb-3 tracking-tight leading-tight">
                        {isAdminLogin ? 'Admin Login' : 'Sign In'}
                    </h1>
                    <p className="text-xs font-medium text-gray-400 tracking-wide">
                        {isAdminLogin ? 'Authorized personnel only' : 'Enter your credentials to continue'}
                    </p>
                </div>

                {successMessage && (
                    <div className="mb-8 p-4 bg-green-50 border border-green-100 rounded-sm text-green-700 flex items-center gap-3 text-xs font-medium shadow-sm animate-slideIn">
                        <Shield size={18} className="text-green-500" />
                        <span>{successMessage}</span>
                    </div>
                )}

                {error && (
                    <div className="mb-8 p-4 bg-red-50 border border-red-100 rounded-sm text-red-700 flex items-center gap-3 text-xs font-medium shadow-sm animate-shake">
                        <AlertCircle size={18} className="text-red-500" />
                        <span>{error}</span>
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-xs font-semibold text-[#024ad8] uppercase tracking-wider mb-2">Email</label>
                        <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                                <Mail size={18} className="text-gray-300 group-focus-within:text-[#024ad8] transition-colors" />
                            </div>
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="block w-full pl-14 pr-5 py-3.5 border border-gray-200 rounded-sm bg-gray-50/50 text-sm font-medium tracking-normal focus:outline-none focus:border-[#024ad8] focus:bg-white transition-all placeholder:text-gray-300"
                                placeholder="name@domain.com"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-xs font-semibold text-[#024ad8] uppercase tracking-wider mb-2">Password</label>
                        <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                                <Lock size={18} className="text-gray-300 group-focus-within:text-[#024ad8] transition-colors" />
                            </div>
                            <input
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="block w-full pl-14 pr-5 py-3.5 border border-gray-200 rounded-sm bg-gray-50/50 text-sm font-medium tracking-normal focus:outline-none focus:border-[#024ad8] focus:bg-white transition-all placeholder:text-gray-300"
                                placeholder="••••••••"
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center group cursor-pointer">
                            <input
                                id="admin-login"
                                type="checkbox"
                                checked={isAdminLogin}
                                onChange={(e) => setIsAdminLogin(e.target.checked)}
                                className="h-4 w-4 text-[#024ad8] focus:ring-[#024ad8] border-gray-300 rounded-sm transition-all cursor-pointer"
                            />
                            <label htmlFor="admin-login" className="ml-3 block text-xs font-medium text-gray-400 cursor-pointer group-hover:text-black transition-colors">
                                Admin Login
                            </label>
                        </div>

                        <div>
                                <Link href="/forgot-password" title="Forgot Password" className="font-semibold text-[#024ad8] hover:underline text-xs">
                                    Forgot Password?
                                </Link>
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full flex justify-center py-4 px-8 rounded-sm shadow-lg text-sm font-bold uppercase tracking-wider transition-all disabled:opacity-30 disabled:cursor-not-allowed hover:-translate-y-0.5
                            ${isAdminLogin
                                ? 'bg-[#024ad8] hover:bg-[#0133a1] text-white shadow-[#024ad8]/20'
                                : 'bg-black hover:bg-gray-800 text-white shadow-black/20'
                            }
                        `}
                    >
                        {loading ? 'Signing in...' : (isAdminLogin ? 'Admin Sign In' : 'Sign In')}
                    </button>
                </form>

                <div className="mt-10 text-center border-t border-gray-100 pt-8">
                    <p className="text-sm font-medium text-gray-400">
                        Don't have an account?{' '}
                        <Link href="/signup" className="text-[#024ad8] font-semibold hover:underline ml-1">
                            Sign Up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
