const mongoose = require('mongoose');
const schema = mongoose.Schema({
  email:String,
password:String,
phone:Number
})

const UserData = mongoose.model('userdata',schema);
module.exports = UserData;