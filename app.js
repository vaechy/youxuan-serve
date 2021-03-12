require("./db"); //加载db.js
 //加载数据模型
var createError = require("http-errors");

var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
//配置路由
var staticRouter = require("./routes/static");
var indexRouter = require("./routes/home");
var itemsRouter = require("./routes/items");
//用户
var usersRouter = require("./routes/users");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
//接收请求转换json数据
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

//加载路由
app.use('/',staticRouter)
app.use('/indexPage',indexRouter);
app.use("/items", itemsRouter);
app.use("/user", usersRouter);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});
module.exports = app;
