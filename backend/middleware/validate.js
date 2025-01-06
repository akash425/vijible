const Joi = require('joi');

exports.validateRegister = (req, res, next) => {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
        role: Joi.string().valid('admin', 'student', 'college')
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
