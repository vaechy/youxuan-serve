const { User } = require('../model/UserSchema')
function quiryUser(wherestr) {
  return new Promise((resolve, reject) => {
    User.findOne(wherestr, function(err, res) {
      if (err) {
        reject(err)
      } else {
        resolve(res)
      }
    });
  })

}
function seveUser(userInfo) {
  return new User(userInfo).save().then(res => {
    if (res) {
      return true
    }
  }, err => {
    if (err) {
      return false
    }
  })
}
function quiryPhone(phone) {
  return new Promise((resolve, reject) => {
    User.findOne(phone, function(err, res) {
      if (err) {
        reject(err)
      } else {
        resolve(res)
      }
    });
  })
}
module.exports = {
  quiryUser,
  seveUser,
  quiryPhone
}