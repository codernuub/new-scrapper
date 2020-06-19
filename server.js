const puppeteer = require('puppeteer');
async function pup(req ,res){

    const browser = await puppeteer.launch({headless:true});

    try{
        const page = await browser.newPage();

        await page.goto("https://hindustantimes.com/education", {
            networkIdleTimeout:5000,
            waitUntil:"networkidle2",
            timeout:3000000
        });
        const news = await page.evaluate(()=>{
        let posts = [];
        const list = document.querySelectorAll('.media');
        
        for(let i = 0;i < 6;i++){

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
        res.status(200).json({data:news});

    }catch(e){
        browser.close();
        res.status(404).json({data:"request timeout error"});
    }
       
}

module.exports = pup;