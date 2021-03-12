var express = require('express');
var router = express.Router();
const { seveUser,quiryUser,quiryPhone} = require('../controller/User')
/* GET users listing. */



//registered
router.post('/register', function (req, res, next) {
  //查询用户
  quiryUser({ username: req.body.username }).then(result => {
    if (result) {
      res.send({code:-1, msg:'用户名已经存在' })
    } else {
      //注册用户
      seveUser(Object.assign(req.body, { create_time: new Date() })).then(result => {
        if (result) {
          res.send({code:0, msg:'注册成功' })
        } else {
          res.send({ code: -1,msg:'服务器错误' })
        }
      })
    }
  }).catch(err => {
    if (err) {
      res.send({ code: -1,msg:'服务器错误' })
    }
  })
  //插入用户    

  
});
//登陆
router.post('/login', async function (req, res, next) {
  try {
    //Promise 并行
    const resilts = await Promise.all([quiryUser({ username: req.body.account }), quiryPhone({ phone: req.body.account })])
    for (const key in resilts) {
      if (resilts[key]) {
        if (resilts[key].password == req.body.password) {
          res.send({ code: 0, msg: '登陆成功' })
          return
        } else {
          res.send({ code: -1, msg: '密码错误' })
          return
        }
      }
    }
    res.send({ code: -1, msg: '账户不存在'})
  } catch (error) {
    if (error) {
      console.log(error);
      res.send({code:-1,msg:'service in error'})
    }
  }
  
});
module.exports = router;
