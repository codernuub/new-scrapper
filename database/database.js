const News = require('./model');

async function getData(req, res){
 
   const [ news ] = await News.find();
   news ? 
   res.status(200).json({data:news , success:true}):
   res.status(404).json({response:"news not found" , success : false});

}

async function storeData(news){
   const news = await News(news).save();
   return news?1:0;
}

module.exports = {getData , storeData};