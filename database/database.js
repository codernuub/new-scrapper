const News = require('./model');

async function getData(req, res){

   const news = await News.find();
   news.length ? 
   res.status(200).json({data:news , success:true}):
   res.status(404).json({response:"news not found" , success : false});

}

async function storeData(data){
   if(data){
   await News.deleteMany({});
   await News.insertMany(data);
   }
}

module.exports = {getData , storeData};