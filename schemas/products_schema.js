const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productName : {
    type : String,
    required: true,
  },
  author : {
    type : String,
    unique : 1,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  pwd: {
    type: String, 
    required: true,
    unique : 1,
  },
  status : {
    type : String,
    default : "FOR_SALE",
  }

},
{timestamps : true}
);


module.exports = mongoose.model("cocoaMarket", productSchema);
