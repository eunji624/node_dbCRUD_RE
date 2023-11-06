const express = require("express");
const cocoaMarket = require("../schemas/products_schema.js");
const router = express.Router();

//데이터베이스 전체 가져오기__ 확인용 
router.get("/productsAll", async(req, res)=>{
  try{
    const listData = await cocoaMarket.find({}).sort("-createdAt");
    return res.status(200).json(listData);
  }catch(err){
    console.log(err);
    res.status(404).json({"message" : "리스트를 가져오는데 실패하였습니다."})
  }
})

//상품 리스트 가져오기 
router.get("/products", async(req, res)=>{
  try{
    const listData = await cocoaMarket.find({}).sort("-createdAt");

    //원하는 데이터만 리스트에 보여주기
    const newListData = []
    listData.map((data)=>{
      const { productName, author, status, createdAt } = data;
      data = {
        productName,
        author, 
        status, 
        createdAt
      }
      return newListData.push(data);
    })
    return res.status(200).json(newListData);

  }catch(err){
    console.log(err);
    res.status(404).json({"message" : "리스트를 가져오는데 실패하였습니다."})
  }
})

//상품 작성하기
router.post("/product", async (req, res)=>{
  const { productName, author, content, pwd } = req.body;
  if(!productName, !author, !content, !pwd){
    return res.status(400).json({"message" : "데이터 형식이 올바르지 않습니다."})
  }
  const inputData = {
    productName,
    author,
    content,
    pwd,
  };
  try{
    await cocoaMarket.create(inputData);
    return res.status(200).json({message : "데이터를 저장하는데 성공하였습니다."});
  } catch (err){
    console.log(err);
    res.status(404).json({"message" : "리소스를 찾을 수 없습니다."});
  }
})

//상품 상세 조회하기
router.get("/product/:_id", async (req, res)=>{
  const _id = req.params;
  try{
    let detailData = await cocoaMarket.findById(_id);
    const {productName, author, content, status, createdAt} = detailData;
    detailData = {
      productName,
      author,
      content,
      status,
      createdAt
    }
    return res.status(200).json(detailData);
  } catch(err){
    console.log(err);
    res.status(404).json({message : "상품을 조회하는데 실패하였습니다."})
  }
})

//상품 삭제하기
router.delete("/product/:_id", async (req, res)=>{
  const _id = req.params;
  const pwd = req.body.pwd;
  if(!pwd){
    return res.status(400).json({"messege" : "비밀번호를 입력 해주세요."})
  }
  try{
    const data = await cocoaMarket.findById(_id);
    if(data.pwd !== pwd){
      return res.status(401).json({ "messege" : "비밀번호가 올바르지 않습니다."})
    }
    await cocoaMarket.deleteOne(_id)
    return res.status(200).json({"messege" : "상품이 삭제되었습니다."})
  }catch (err){
    console.log(err)
    return res.status(404).json({"messege" : "상품 조회에 실패하였습니다."})
  }
})

//상품 수정하기
router.put("/product/:_id", async (req, res)=>{
  const _id = req.params;
  const { productName, content, status, pwd } = req.body;
  
  if(!productName || !content || !status || !pwd){
    return res.status(400).json({"messege" : "데이터 형식이 올바르지 않습니다."})
  }
  try{
    const data = await cocoaMarket.findById(_id);
    if(data.pwd !== pwd){
      return res.status(401).json({ "messege" : "비밀번호가 올바르지 않습니다."})
    }
    await cocoaMarket.updateOne({productName, content, status, pwd})
    return res.status(200).json({"messege" : "상품이 수정되었습니다."})
  }catch (err){
    console.log(err)
    return res.status(404).json({"messege" : "상품 조회에 실패하였습니다."})
  }
})

module.exports = router