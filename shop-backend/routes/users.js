const userRouter = require('express').Router();
const { validateUpdateUser, validateUpdateAvatar } = require('../middlewares/data-validation');

const {
  updateUserData,
  updateAvatar,
  getUser,
} = require('../controllers/users');

userRouter.get('/me', getUser);

userRouter.patch('/me', validateUpdateUser, updateUserData);

userRouter.patch('/me/avatar', validateUpdateAvatar, updateAvatar);

module.exports = {
  userRouter,
};
