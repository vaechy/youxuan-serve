const mongoose = require("mongoose");
const { Schema } = mongoose;
// 对 schema 进行嵌套时， （上例中的 children）， 传给父 schema 引用之前一定要先声明子 schema。
const goodsList =new Schema({
  title: String,
  sub_title: String,
  picUrl: String,
  tag: String,
  spec: String,
  price: Number,
  discount: String,
  desc: String
})
const categoryList = new Schema({
  title: String,
  sub_title: String,
  list: [goodsList]
})
const item =new Schema({
  banner_img: String,
  list:[categoryList]
})

module.exports = {
  item,
}