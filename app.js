//express 와 schemas 가져오기
const express = require("express");
const connect = require("./schemas");
const app = express();

const port = 3002;

//body-parser
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//router 연결하기
const productRouter = require("./routes/products_router.js");
app.use("/api", productRouter);

app.get("/", (req, res)=>{
  res.send("mallish에 오신걸 환영합니다. /api/products 로 이동하시면 상품을 볼 수 있습니다.")
})

app.listen(port, ()=>{
  connect();
  console.log(port, "로 서버가 열렸습니다.");
})