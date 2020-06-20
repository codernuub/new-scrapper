const puppeteer = require('puppeteer');
const db = require('./database/database');
async function scrap(){

    const browser = await puppeteer.launch({headless:true});

    try{
        const page = await browser.newPage();

        await page.goto("https://hindustantimes.com/education");
       
        await page.setDefaultNavigationTimeout(0);
        const news = await page.evaluate(()=>{
        let posts = [];
        const list = document.querySelectorAll('.media');
        for(let i = 0;i < 6;i++){
            console.log("evalutaion")
            let post = {};
            const a = list[i].querySelector('a');
            post.title = a.title;
            post.link = a.href;
            post.image = list[i].querySelector('img').src;
            post.description = list[i].querySelector('p').textContent;
            post.time = list[i].querySelector('span').textContent;
            posts.push(post);
        }   
        return posts;
        })
        browser.close();
        db.storeData(news);

        }catch(e){
        console.log(e);
        browser.close();
        }  
}

module.exports = scrap;