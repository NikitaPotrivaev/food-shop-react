const { celebrate, Joi } = require('celebrate');
const regularLink = require('../utils/regularLink');

const validateUpdateUser = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30).required(),
    email: Joi.string().required().email(),
    phone: Joi.string().min(11).max(12).required(),
  }),
});

const validateUpdateAvatar = celebrate({
  body: Joi.object().keys({
    avatar: Joi.string().required().regex(regularLink),
  }),
});

const validateUserRegister = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    phone: Joi.string().min(11).max(12).required(),
    avatar: Joi.string().pattern(regularLink),
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
});

const validateUserLogin = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
});

module.exports = {
  validateUpdateUser,
  validateUpdateAvatar,
  validateUserRegister,
  validateUserLogin,
};
