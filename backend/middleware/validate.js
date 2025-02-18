const Joi = require('joi');

exports.validateRegister = (req, res, next) => {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(4).required(),
        role: Joi.string().valid('admin', 'student', 'college').required(),
        mobile: Joi.string().pattern(/^[0-9]{10}$/).required(),
        streetAddress: Joi.string().required(),
        collegeName: Joi.string().when('role', {
            is: 'college',
            then: Joi.required(),
            otherwise: Joi.forbidden()
        }),
        city: Joi.string().required(),
        state: Joi.string().required(),
        pincode: Joi.string().pattern(/^[0-9]{6}$/).required()
    });

    const { error } = schema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });
    next();
};

exports.validateLogin = (req, res, next) => {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required()
    });
    const { error } = schema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });
    next();
}

exports.validateNotificationPreferences = (req, res, next) => {
    const schema = Joi.object({
        email: Joi.boolean().required(),
        inApp: Joi.boolean().required()
    });
    const { error } = schema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });
    next();
}

exports.validateTask = (req, res, next) => {
    const schema = Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        status: Joi.string().required(),
        priority: Joi.string().required(),
        dueDate: Joi.date().required(),
        assignedTo: Joi.string().required(),
    });
    const { error } = schema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });
    next();
}

exports.validateUpdateTask = (req, res, next) => {
    const schema = Joi.object({
        title: Joi.string(),
        description: Joi.string(),
        status: Joi.string(),
        priority: Joi.string(),
        dueDate: Joi.date(),
        assignedTo: Joi.string(),
    });
    const { error } = schema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });
    next();
}

exports.validateDeleteTask = (req, res, next) => {
    const schema = Joi.object({
        id: Joi.string().required(),
    });
    const { error } = schema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });
    next();
}
