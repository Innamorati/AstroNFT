const joi = require('joi')
const validator = (req, res, next) => {
    const schema = joi.object({
        firstName: joi.string().max(15).min(3).trim().pattern(new RegExp('[a-zA-Z]')).required().messages({
            'string.min': 'El nombre debe contener como minimo 3 caracteres',
            'string.max': 'El nombre debe contener como minimo 3 caracteres'
        }),
        lastName: joi.string().max(15).min(2).trim().pattern(new RegExp('[a-zA-Z]')).required().messages({
            'string.min': 'El nombre debe contener como minimo 3 caracteres',
            'string.max': 'El nombre debe contener como minimo 3 caracteres'
        }),
        email: joi.string().email({ minDomainSegments: 2 }).required().messages({
            'string.email': 'Formato incorrecto de email'
        }),
        password: joi.string().pattern(new RegExp('[a-zA-Z0-9]')).required().trim().min(8).max(30).messages({
            'string.min': 'El password debe contener como minimo 8 caracteres',
            'string.max': 'El nombre debe contener como minimo 3 caracteres'
        }),
        image: joi.string(),
        from: joi.string()
    })

    const validation = schema.validate(req.body.data, { abortEarly: false })

    if (validation.error) {

        return res.json({ success: false, message: validation.error.details })
    }
    next()
}
module.exports = validator