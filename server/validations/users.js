import Joi from "joi";

export const validateCreateUser = (userInfo) => {
    const schema = Joi.object({
        userName: Joi.string().required(),
        email: Joi.string().email().required(),
    });
    return schema.validate(userInfo);
}
// 