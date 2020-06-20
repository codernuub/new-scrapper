const News = require('./model');

async function getData(req, res){

   const news = await News.find();
   news.length ? 
   res.status(200).json({data:news , success:true}):
   res.status(404).json({response:"news not found" , success : false});

}

async function storeData(data){
   const news = await News.insertMany(data);
   return (news ? 1 : 0);
}

module.exports = {getData , storeData};