const mongoose = require("mongoose"); // 引入mongoose

const uri = "113.31.108.13:27017"; //数据库地址端口
const dbName = "youxuan"; //数据库名字
const dbUserName = "youxuan";
const dbPassword = "123456";
mongoose.set('useCreateIndex', true)
// 连接到mongoDB的youxuan数据库
mongoose.connect(
  `mongodb://${dbUserName}:${dbPassword}@${uri}/${dbName}?authSource=${dbName}`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
// 该地址格式：mongodb://[username:password@]host:port/database[?options]
// 默认port为27017

const db = mongoose.connection;

db.on("error", function callback() {
  // 监听是否有异常
  console.log("Connection error");
});
const interfaces = require('os').networkInterfaces();
        // let IPAddress = '';
        // for (let devName in interfaces) {
        //     let iface = interfaces[devName];
        //     for (let i = 0; i < iface.length; i++) {
        //         let alias = iface[i];
        //         if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
        //             IPAddress = alias.address;
        //         }
        //     }
        // }
console.log();
db.once("open", function callback() {
  // 监听一次打开
  // 在这里创建你的模式和模型
  console.log(`db connected!后台api地址:http://${interfaces.WLAN[3].address}:30000`);
});
