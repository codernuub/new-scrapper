const puppeteer = require("puppeteer");
const db = require("./database/database");

async function scrap() {
  const browser = await puppeteer.launch({ headless: true });

  try {
    const page = await browser.newPage();
    await page.goto("https://hindustantimes.com/education");
    page.setDefaultNavigationTimeout(0);

    const news = await page.evaluate(() => {
      let posts = [];
      const list = document.querySelectorAll(".media");

      list.forEach((item) => {
        const a = item.querySelector("a");
        const post = {
          title: a.title,
          link: a.href,
          image: item.querySelector("img").src,
          description: item.querySelector("p").textContent,
          time: item.querySelector("span").textContent
        };
        posts.push(post);
      });

      return posts;
    });

    db.storeData(news);
  } catch (e) {
    console.log(e);
  }

  browser.close();
}

module.exports = scrap;
