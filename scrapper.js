const puppeteer = require("puppeteer");
const db = require("./database/database");

async function scrap() {
  const browser = await puppeteer.launch({ headless: true});

  try {
    const page = await browser.newPage();

    await page.goto("https://hindustantimes.com/education");
    await page.setDefaultNavigationTimeout(0);
    const news = await page.evaluate(() => {
      function getDate(date) {
        return date.split(",")[0];
      }
      const posts = [];
   
      const list = document.querySelectorAll(".media");
      for (let i = 0; i < 6; i++) {
        let post = {};

          const a = list[i].querySelector("a");
          post.title = a.title;
          post.link = a.href;
          post.image = list[i].querySelector("img").src;
          post.description = list[i].querySelector("p").textContent;
          post.time = getDate(list[i].querySelector("span").textContent);
          posts.push(post);
      }
      return posts;
    });
    page.close();
    browser.close();
    db.storeData(news);

    console.log("done scraping");
  } catch (e) {
    console.log(e);
    browser.close();
  }
}

module.exports = scrap;