'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart as addToCartAction, removeFromCart as removeFromCartAction, saveShippingAddress } from '../redux/actions/cartActions';
import { useAuth } from './AuthContext';

const ShopContext = createContext();

export const useShop = () => {
    return useContext(ShopContext);
};

export const ShopProvider = ({ children }) => {
    const dispatch = useDispatch();
    const { isAuthenticated } = useAuth();

    // Redux Cart State
    const cartState = useSelector((state) => state.cart);
    const { cartItems, shippingAddress } = cartState;

    // Wishlist State (Keep in Context for now as it's not in smartinkguide Redux)
    const [wishlist, setWishlist] = useState(() => {
        const savedWishlist = localStorage.getItem('wishlist');
        return savedWishlist ? JSON.parse(savedWishlist) : [];
    });

    // Persist Wishlist to LocalStorage
    useEffect(() => {
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
    }, [wishlist]);

    // Cart Actions (Mapped to Redux)
    const addToCart = (product, quantity = 1) => {
        // Redux action uses id/slug
        dispatch(addToCartAction(product._id || product.slug, quantity));
    };

    const removeFromCart = (productId) => {
        dispatch(removeFromCartAction(productId));
    };

    const updateQuantity = (productId, quantity) => {
        if (quantity < 1) return;
        dispatch(addToCartAction(productId, quantity)); // addToCart in smartinkguide updates qty if already exists
    };

    const clearCart = () => {
        // Clear logic for Redux cart
        cartItems.forEach(item => dispatch(removeFromCartAction(item.product)));
    };

    // Wishlist Actions
    const addToWishlist = (product) => {
        if (!isAuthenticated) return false;

        setWishlist(prevWishlist => {
            if (prevWishlist.some(item => item._id === product._id)) return prevWishlist;
            return [...prevWishlist, product];
        });
        return true;
    };

    const removeFromWishlist = (productId) => {
        setWishlist(prevWishlist => prevWishlist.filter(item => item._id !== productId));
    };

    const isInWishlist = (productId) => {
        return wishlist.some(item => item._id === productId);
    };

    const moveToCart = (product) => {
        addToCart(product);
        removeFromWishlist(product._id);
    };

    // Shipping Actions
    const saveShippingInfo = (info) => {
        dispatch(saveShippingAddress({
            address: info.address,
            city: info.city,
            state: info.state || '',
            postalCode: info.postalCode,
            country: info.country,
            phone: info.phone || '',
            fullName: info.fullName
        }));
    };

    // Map Redux cartItems to expected Format in Context (if needed)
    // smartinkguide cart item: { product, title, image, price, countInStock, slug, qty }
    // current context item: { _id, title, images, price, quantity, ... }
    const cart = cartItems.map(item => ({
        ...item,
        _id: item.product,
        quantity: item.qty,
        images: [item.image]
    }));

    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    const wishlistCount = wishlist.length;
    const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    
    // Dynamic Pricing Logic: Free shipping for orders $249 and above
    const shippingPrice = cartTotal >= 249 || cartTotal === 0 ? 0 : 45;
    const taxPrice = 0; // Tax removed per user request
    const totalPrice = cartTotal + shippingPrice;

    const value = {
        cart,
        wishlist,
        shippingInfo: {
            fullName: shippingAddress.fullName || '',
            address: shippingAddress.address || '',
            city: shippingAddress.city || '',
            postalCode: shippingAddress.postalCode || '',
            country: shippingAddress.country || '',
            state: shippingAddress.state || '',
            phone: shippingAddress.phone || ''
        },
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
        moveToCart,
        saveShippingInfo,
        cartCount,
        wishlistCount,
        cartTotal,
        shippingPrice,
        taxPrice,
        totalPrice
    };

    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    );
};
