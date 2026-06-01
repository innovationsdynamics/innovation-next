'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // API URL from environment variables
    const API_URL = '/api';

    useEffect(() => {
        // Check for logged-in user in localStorage on mount
        const checkLoggedIn = async () => {
            const storedUser = localStorage.getItem('userInfo');
            if (storedUser) {
                const parsedUser = JSON.parse(storedUser);
                setUser(parsedUser);

                // Optional: Verify token existence and validity with backend
                // For now, we trust localStorage to avoid login flicker, but normally we'd hit /profile
            }
            setLoading(false);
        };
        checkLoggedIn();
    }, []);

    const login = async (email, password, isAdminLogin = false) => {
        setLoading(true);
        try {
            const response = await fetch(`${API_URL}/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password, isAdminLogin }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Login failed');
            }

            setUser(data);
            localStorage.setItem('userInfo', JSON.stringify(data));
            return data;
        } catch (error) {
            throw error;
        } finally {
            setLoading(false);
        }
    };

    const signup = async (firstName, lastName, email, password, isAdmin = false) => {
        // Note: Backend might ignore isAdmin flag for security reasons
        // But we pass it if we ever decide to allow it via API or for consistency
        try {
            const response = await fetch(`${API_URL}/auth/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    firstName,
                    lastName,
                    email,
                    password,
                    // isAdmin // Backend registerUser doesn't currently accept this, so we don't send it to avoid confusion
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Signup failed');
            }

            // Backend register response includes token, so we can auto-login
            setUser(data);
            localStorage.setItem('userInfo', JSON.stringify(data));
            return data;
        } catch (error) {
            throw error;
        }
    };

    const sendOTP = async (firstName, lastName, email, password) => {
        try {
            const response = await fetch(`${API_URL}/auth/send-registration-otp`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ firstName, lastName, email, password }),
            });
            const data = await response.json();
            if (!response.ok) throw new Error(data.message || 'Failed to send OTP');
            return data;
        } catch (error) {
            throw error;
        }
    };

    const verifyOTP = async (email, otp) => {
        try {
            const response = await fetch(`${API_URL}/auth/verify-registration-otp`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, otp }),
            });
            const data = await response.json();
            if (!response.ok) throw new Error(data.message || 'OTP verification failed');
            return data;
        } catch (error) {
            throw error;
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('userInfo');
    };

    const value = {
        user,
        setUser,
        isAuthenticated: !!user,
        login,
        signup,
        logout,
        sendOTP,
        verifyOTP,
        loading
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
