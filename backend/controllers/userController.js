const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { AppError, NotFoundError, ValidationError } = require('../utils/customErrors');

exports.register = async (req, res, next) => {
    console.log(req.body);
    try {
        const { email, password, role } = req.body;
        const user = new User({ email, password, role });
        await user.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error("error: ", error);
        return next("Error in saving data");
    }
};

exports.login = async (req, res, next) => {
    console.log("req.body $$$$$$$$$$$$$$$$$$$$$$$");
    console.log(req.body);
    try {
        const { email, password } = req.body;

        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            return next(new ValidationError('Invalid email or password', 401));
        }

        // Check password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return next(new ValidationError('Invalid email or password', 401));
        }

        // Generate JWT token
        const token = jwt.sign(
            { userId: user._id, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.json({ success: true, token });
    } catch (error) {
        next(new AppError(error.message, 500));
    }
};

exports.logout = async (req, res) => {
    const token = req.headers['authorization']?.split(' ')[1]; // Adjust according to your token format
    if (token) {
        await Blacklist.create({ token });
    }
    res.json({ message: 'Logged out successfully' });
};

exports.getUserProfile = async (req, res) => {
    try {
        const { email, password } = req.body;
        // const user = await User.findById(req.user.userId).select('-password');
        const user = await User.findOne({ email });
        if (!user) {
            return next(new NotFoundError('User not found', 404));
        }
        res.json(user);
    } catch (error) {
        next(new AppError(error.message, 500));
    }
};
