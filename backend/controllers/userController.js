const User = require('../models/User');

exports.register = async (req, res, next) => {
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
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if(user.password == password){
            console.log("login Successful");
            res.status(201).json({ message: 'login Successful' });
        } else {
            console.error("login failed");
            res.status(201).json({ message: 'login failed' });
        }
    } catch (error) {
        console.error("error: ", error);
        return next("Error in saving data");
    }
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
