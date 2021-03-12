
const mongoose = require('mongoose')
// import config from '../config'
const Schema = mongoose.Schema

const userSchema = new Schema({
  // user_id: {
  //   type: Number,
  //   required: true,
  //   unique: true,
  //   // default: ObjectId
  // },

  username: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    // default: `http://${config.public_host}:${config.port}/public/images/default.png`
  },
  gender: {
    type: String,
    enum: ['保密', '男', '女'],
    default: '保密'
  },
  bio: {
    type: String,
    default: ''
  },
  birthday: {
    type: String,
    default: ''
  },
  create_time: {
    type: Date,
    required: true
  }
})
exports.User = mongoose.model('user', userSchema)
