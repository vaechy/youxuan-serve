const mongoose = require('mongoose')
const schemas = require("../model/HomeSchema")
const itemSchemas =  require("../model/ItemSchema")
function getData(collection, data) {
  const Model = mongoose.model(collection,schemas[collection],collection); //引入模型
  Model.find({}, (err,doc) => { 
    if (err) {
      throw err
    } else { 
      data(doc)
    }
  })
}
async function getItemData(index) {
  /***
   *mongoose.model(collection,schemas,rename);
   * @params
   * collection:数据库集合名字,默认复数形式访问数据库
   * rename: 重命名集合名字
   */
  const Model = mongoose.model('item', itemSchemas['item']); //引入模型
  return await Model.find().skip(+index).limit(1)
}
module.exports = {
  getData,
  getItemData
}