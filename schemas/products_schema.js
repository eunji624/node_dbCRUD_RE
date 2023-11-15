const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productName : {
    type : String,
    required: true,
  },
  author : {
    type : String,
    unique : true,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  pwd: {
    type: String, 
    required: true,
  },
  status : {
    type : String,
    default : "FOR_SALE",
  }

},
{timestamps : true}
);


module.exports = mongoose.model("Product", productSchema);
