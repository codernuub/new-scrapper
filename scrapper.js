const puppeteer = require("puppeteer");
const db = require("./database/database");

async function scrap() {
  const browser = await puppeteer.launch({ 
    headless: true,
    args:["--no-sandbox"]
  });

  try {
    const page = await browser.newPage();
    await page.goto("https://hindustantimes.com/education");
    page.setDefaultNavigationTimeout(0);

    const news = await page.evaluate(() => {
      let posts = [];
      const list = document.querySelectorAll(".media");
  
      for(let i = 0 ;i <6; i++){
        const a = list[i].querySelector("a");
        const post = {
          title: a.title,
          link: a.href,
          image: list[i].querySelector("img").src,
          description: list[i].querySelector("p").textContent,
          time: list[i].querySelector("span").textContent
        };
        posts.push(post);

      }
      return posts;
    });

    db.storeData(news);
    console.log("done scrapping");
  } catch (e) {
    console.log(e.message);
  }

  browser.close();
}

module.exports = scrap;
