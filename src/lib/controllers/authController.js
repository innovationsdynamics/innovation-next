const asyncHandler = require('express-async-handler');
const User = require('../models/User');
const OTP = require('../models/OTP');
const jwt = require('jsonwebtoken');
const { generateOTP, sendOTPEmail, sendEmail } = require('../utils/emailService');

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    });
};

// @desc    Register a new user (Direct - No OTP)
// @route   POST /api/auth/register
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    
    // Simple validation
    if (!firstName || !lastName || !email || !password) {
        res.status(400);
        throw new Error('Please fill in all fields');
    }

    const trimmedEmail = email.trim().toLowerCase();

    // Check if user exists
    const userExists = await User.findOne({ email: trimmedEmail });
    if (userExists) {
        res.status(400);
        throw new Error('User already exists');
    }

    // Create user
    const user = await User.create({
        firstName,
        lastName,
        name: `${firstName} ${lastName}`,
        email: trimmedEmail,
        password,
        // isVerified: true // If you have this field in your model, uncomment it
    });

    if (user) {
        // Notify Admins
        const io = req.app.get('io');
        io.emit('new-user', {
            id: user._id,
            message: `New user registration: ${user.name}`,
            path: '/admin/customers',
            time: new Date()
        });

        // Email Notification to Admin
        try {
            await sendEmail({
                to: process.env.CONTACT_RECEIVER_EMAIL || 'support@innovationdynamicsgroup.com',
                subject: `New User Registration: ${user.name}`,
                html: `<h3>New User Registered</h3><p><b>Name:</b> ${user.name}</p><p><b>Email:</b> ${user.email}</p><p><b>Time:</b> ${new Date().toLocaleString()}</p>`,
                text: `New User Registered: ${user.name} (${user.email})`
            });
        } catch (err) {
            console.error('Failed to send registration notification email:', err);
        }

        res.status(201).json({
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id),
        });
    } else {
        res.status(400);
        throw new Error('Invalid user data');
    }
});

// @desc    Auth user & get token
// @route   POST /api/auth/login
// @access  Public
const authUser = asyncHandler(async (req, res) => {
    const { email, password, isAdminLogin } = req.body;
    
    // Normalize email to ensure case-insensitive matching
    const normalizedEmail = email ? email.trim().toLowerCase() : '';
    
    const user = await User.findOne({ email: normalizedEmail });

    if (user && (await user.matchPassword(password))) {
        // Check if user is blocked
        if (user.isBlocked) {
            res.status(403);
            throw new Error('Your account has been blocked by admin. Please contact support.');
        }

        // Strict Role Separation
        if (!isAdminLogin && user.isAdmin) {
            res.status(401);
            throw new Error('You are not our user');
        }

        if (isAdminLogin && !user.isAdmin) {
            res.status(401);
            throw new Error('Not authorized as an admin');
        }

        res.json({
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id),
        });
    } else {
        res.status(401);
        throw new Error('Invalid email or password');
    }
});

// @desc    Send OTP for registration
// @route   POST /api/auth/send-registration-otp
// @access  Public
const sendRegistrationOTP = asyncHandler(async (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    const trimmedEmail = email.trim().toLowerCase();

    console.log('Send registration OTP request:', { firstName, lastName, email: trimmedEmail });

    // Validate input
    if (!firstName || !lastName || !email || !password) {
        console.log('Validation failed: missing fields');
        res.status(400);
        throw new Error('All fields are required');
    }

    // Check if user already exists
    const userExists = await User.findOne({ email: trimmedEmail });
    if (userExists) {
        console.log('User already exists:', trimmedEmail);
        res.status(400);
        throw new Error('User already exists');
    }

    // Generate OTP
    const otp = generateOTP();
    console.log('Generated OTP for registration:', otp);

    // Store OTP in DB first (so it's saved even if email has a hiccup)
    await OTP.findOneAndDelete({ email: trimmedEmail, type: 'registration' });
    await OTP.create({
        email: trimmedEmail,
        otp,
        type: 'registration',
        registrationData: { firstName, lastName, password }
    });

    // Send OTP email
    try {
        await sendOTPEmail(trimmedEmail, otp, 'registration');
        console.log('✅ Registration OTP email sent to:', trimmedEmail);
    } catch (err) {
        // Log full error details for Render dashboard diagnosis
        console.error('❌ Registration OTP email FAILED.');
        console.error('   Error:', err.message);
        console.error('   Stack:', err.stack);
        console.error('   → Make sure BREVO_API_KEY is set in Render Environment Variables.');
        console.error('   → OTP is saved in DB. User can retry registration.');

        // Return a real error — do NOT silently lie to the user that email was sent
        return res.status(503).json({
            message: 'We could not send the verification email. Please try again in a moment or contact support.',
            emailFailed: true,
        });
    }

    console.log('Registration OTP stored and emailed for:', trimmedEmail);
    res.json({ message: 'OTP sent to your email', emailSent: true });
});

// @desc    Verify OTP and register user
// @route   POST /api/auth/verify-registration-otp
// @access  Public
const verifyRegistrationOTP = asyncHandler(async (req, res) => {
    const { email, otp } = req.body;

    const trimmedEmail = email.trim().toLowerCase();
    console.log('Verify registration OTP request:', { email: trimmedEmail, otp });

    // Verify OTP
    const otpRecord = await OTP.findOne({ 
        email: trimmedEmail, 
        otp, 
        type: 'registration' 
    });

    if (!otpRecord) {
        console.log('OTP invalid or expired');
        res.status(400);
        throw new Error('Invalid or expired OTP');
    }

    const { registrationData } = otpRecord;

    // Check if user already exists
    const existingUser = await User.findOne({ email: trimmedEmail });
    if (existingUser) {
        res.status(400);
        throw new Error('User already exists with this email');
    }

    try {
        // Create user
        const user = await User.create({
            firstName: registrationData.firstName,
            lastName: registrationData.lastName,
            name: `${registrationData.firstName} ${registrationData.lastName}`,
            email: trimmedEmail,
            password: registrationData.password,
        });

        console.log('User created successfully:', user.email);

        // Clean up OTP
        await OTP.deleteOne({ _id: otpRecord._id });

        if (user) {
            // Success response WITHOUT token
            res.status(201).json({
                message: 'Account verified successfully. Please log in.',
                email: user.email
            });
        } else {
            res.status(400);
            throw new Error('Invalid user data');
        }
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500);
        throw new Error('Failed to create user: ' + error.message);
    }
});

// @desc    Send OTP for password reset
// @route   POST /api/auth/forgot-password
// @access  Public
const forgotPassword = asyncHandler(async (req, res) => {
    const { email } = req.body;

    const trimmedEmail = email.trim().toLowerCase();

    console.log('Forgot password request for:', trimmedEmail);

    const user = await User.findOne({ email: trimmedEmail });
    if (!user) {
        console.log('User not found:', trimmedEmail);
        res.status(404);
        throw new Error('User not found');
    }

    // Generate OTP
    const otp = generateOTP();
    console.log('Generated OTP for password reset:', otp);

    // Store OTP in DB first
    await OTP.findOneAndDelete({ email: trimmedEmail, type: 'reset' });
    await OTP.create({ email: trimmedEmail, otp, type: 'reset' });

    // Send OTP email
    try {
        await sendOTPEmail(trimmedEmail, otp, 'password-reset');
        console.log('✅ Password reset OTP email sent to:', trimmedEmail);
    } catch (err) {
        console.error('❌ Password reset OTP email FAILED.');
        console.error('   Error:', err.message);
        console.error('   Stack:', err.stack);
        console.error('   → Make sure BREVO_API_KEY is set in Render Environment Variables.');

        // Return a real error — do NOT silently lie to the user that email was sent
        return res.status(503).json({
            message: 'We could not send the password reset email. Please try again in a moment.',
            emailFailed: true,
        });
    }

    console.log('Password reset OTP sent successfully to:', trimmedEmail);
    res.json({ message: 'Password reset OTP sent to your email', emailSent: true });
});

// @desc    Verify OTP and reset password
// @route   POST /api/auth/reset-password
// @access  Public
const resetPassword = asyncHandler(async (req, res) => {
    const { email, otp, newPassword } = req.body;

    const trimmedEmail = email.trim().toLowerCase();

    // Verify OTP
    const otpRecord = await OTP.findOne({ 
        email: trimmedEmail, 
        otp, 
        type: 'reset' 
    });

    if (!otpRecord) {
        res.status(400);
        throw new Error('Invalid or expired OTP');
    }

    // Update password
    const user = await User.findOne({ email: trimmedEmail });
    if (!user) {
        res.status(404);
        throw new Error('User not found');
    }

    user.password = newPassword;
    await user.save();

    // Clean up OTP
    await OTP.deleteOne({ _id: otpRecord._id });

    res.json({ message: 'Password reset successfully' });
});

// @desc    Get user profile
// @route   GET /api/auth/profile
// @access  Private
const getUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);

    if (user) {
        res.json({
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
        });
    } else {
        res.status(404);
        throw new Error('User not found');
    }
});

// @desc    Update user profile
// @route   PUT /api/auth/profile
// @access  Private
const updateUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);

    if (user) {
        user.firstName = req.body.firstName || user.firstName;
        user.lastName = req.body.lastName || user.lastName;
        user.name = `${user.firstName} ${user.lastName}`;
        user.email = req.body.email || user.email;

        if (req.body.password) {
            user.password = req.body.password;
        }

        const updatedUser = await user.save();

        res.json({
            _id: updatedUser._id,
            firstName: updatedUser.firstName,
            lastName: updatedUser.lastName,
            name: updatedUser.name,
            email: updatedUser.email,
            isAdmin: updatedUser.isAdmin,
            token: generateToken(updatedUser._id),
        });
    } else {
        res.status(404);
        throw new Error('User not found');
    }
});

// @desc    Get all users
// @route   GET /api/auth/users
// @access  Private/Admin
const getUsers = asyncHandler(async (req, res) => {
    const fetchAll = req.query.fetchAll === 'true';
    const pageSize = 20;
    const page = Number(req.query.page) || 1;
    
    // Search by name or email
    const keyword = req.query.search
    ? {
        $or: [
          { name: { $regex: req.query.search, $options: 'i' } },
          { email: { $regex: req.query.search, $options: 'i' } },
        ],
      }
    : {};

    if (fetchAll) {
        const users = await User.find({}).select('-password');
        res.json({ users, page: 1, pages: 1, count: users.length });
    } else {
        const count = await User.countDocuments(keyword);
        const users = await User.find(keyword)
            .select('-password')
            .limit(pageSize)
            .skip(pageSize * (page - 1));
            
        res.json({ users, page, pages: Math.ceil(count / pageSize), count });
    }
});

// @desc    Delete user
// @route   DELETE /api/auth/users/:id
// @access  Private/Admin
const deleteUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);

        if (user) {
            if (user.isAdmin) {
                return res.status(400).json({ message: 'Cannot delete admin user' });
            }
            await user.deleteOne();
            res.json({ message: 'User removed' });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        console.error('Delete user error:', error);
        next(error);
    }
};

// @desc    Block user
// @route   PUT /api/auth/users/:id/block
// @access  Private/Admin
const blockUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);

        if (user) {
            if (user.isAdmin) {
                return res.status(400).json({ message: 'Cannot block admin user' });
            }
            user.isBlocked = true;
            await user.save();
            res.json({ message: 'User blocked successfully' });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        console.error('Block user error:', error);
        next(error);
    }
};

// @desc    Unblock user
// @route   PUT /api/auth/users/:id/unblock
// @access  Private/Admin
const unblockUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);

        if (user) {
            user.isBlocked = false;
            await user.save();
            res.json({ message: 'User unblocked successfully' });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        console.error('Unblock user error:', error);
        next(error);
    }
};

module.exports = {
    authUser,
    sendRegistrationOTP,
    verifyRegistrationOTP,
    forgotPassword,
    resetPassword,
    getUserProfile,
    updateUserProfile,
    getUsers,
    deleteUser,
    blockUser,
    unblockUser,
    registerUser
};
