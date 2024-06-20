import Joi from "joi";

const validateUser = (user) => {
    const schema = Joi.object({
        userName: Joi.string().required(),
        email: Joi.string().email().required()
    });
    return schema.validate(user);
};

module.exports = { User, validateUser };