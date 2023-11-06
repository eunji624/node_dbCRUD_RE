// // getting-started.js
// const mongoose = require('mongoose');

// main().then(()=> console.log("완료")).catch(err => console.log(err));

// async function main() {
//   await mongoose.connect('mongodb+srv://applecoco:applecoco@127.0.0.1:27017/node_lv1Re')
// }

// module.exports = main;
require("dotenv").config();
const {DB_USER, DB_PW, DB_NAME } = process.env;

const mongoose = require("mongoose");

const connect = () => {
  mongoose
    .connect(
      `mongodb+srv://${DB_USER}:${DB_PW}@cluster0.pqqngbq.mongodb.net/${DB_NAME}`,      
      {autoIndex: false}
    )

    .then(() => {
      console.log("완료");
    })
    .catch((err) => console.log(err));
};

mongoose.connection.on("error", (err) => {
  console.error("몽고디비 연결 에러", err);
});

module.exports = connect;
