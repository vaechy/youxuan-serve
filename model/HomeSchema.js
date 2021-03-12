const mongoose = require("mongoose");
const { Schema } = mongoose;

//define Schema
const banner_1 = new Schema({
  src: String, // 定义一个属性user_id，类型为String
  link: String
});
const indexPage_channels =new Schema({
  name: String, // 定义一个属性user_id，类型为String
  picUrl: String,
  sequen: Number
});
const indexPage_hotSellProduct =new Schema({
  name: String,
  picUrl:String
})
const indexPage_endemic =new Schema({
  title: String,
  sub_title: String,
  picUrl: String,
  tag: String,
  price: Number
})

const indexPage_arrival =new Schema({
  title: String,
  sub_title: String,
  picUrl: String,
  tag: String,
  price: Number,
  spen: Number
})
const goods = new Schema({
  title: String,
  sub_title: String,
  picUrl: String,
  tag: String,
  spec: String,
  price: Number,
  discount: Number
});
const indexPage_categoryGoods =new Schema({
  picUrl: String,
  goods: [goods],
})

//export
module.exports = {
  banner_1,
  indexPage_channels,
  indexPage_hotSellProduct,
  indexPage_endemic,
  indexPage_arrival,
  indexPage_categoryGoods
};
