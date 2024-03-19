const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 2,
    maxlength: 30,
    default: '',
  },
  avatar: {
    type: String,
    default: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwtkwjGRzByI80Tm5DY7EeuvfZ79wTPvsH3l9diNt73lq67VavlQeKukcAbqAwjstq3CM&usqp=CAU',
    validate: {
      validator: (v) => validator.isURL(v),
      message: 'Введите ссылку на изображение',
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (v) => validator.isEmail(v),
      message: 'Введите email',
    },
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  phone: {
    type: String,
    minlength: 11,
    maxlength: 12,
  },
});

module.exports = mongoose.model('user', userSchema);
