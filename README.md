# Next.js blog using Notion.so as CMS

➕ a simple integration with Zapier for information capture.


# 👁 [DEMO IS HERE](https://blog-next.4th-roommate.vercel.app/)

## Setting Notion Database

You can get it from [here](https://www.notion.so/whatifbelief/88f847314b884d228431da3b1fe44a5a?v=b3838604e52c40c7bb5a8984a554dc31). Just copy to your workplace.

Remember, each section must be filled!

✅ ID = The id of a Notion page that can be used as a blog post. For example, https://www.notion.so/whatifbelief/First-Blog-257536fd396b4c73a0c3c25e0f154dd9 is the link to a blogpost. **257536fd396b4c73a0c3c25e0f154dd9** is the needed ID.

✅ title = The title of the page that will be display on the tab in the browser.

✅ slug = The link http://website.com/posts/[slug].

✅ coverImage = The image that is displayed on the main page.

✅ description = The description that can be seen as meta tag

## Make it your own

To use it you need to create your own database. Copy it from this link https://www.notion.so/whatifbelief/88f847314b884d228431da3b1fe44a5a?v=b3838604e52c40c7bb5a8984a554dc31. After you import it into your notion workplace you need to replace the notion id in the repository with your id.

```
next.config.js

module.exports = {
  env: {
    notionTableId: "88f847314b884d228431da3b1fe44a5a", //replace this id this your Notion table id
  },
};

```
❗️❗️❗️ Your Notion pages must be public to be read (otherwise you'll get an error). So, make sure you share them to web. 

## Zapier integration

```
pages/api/zapier.js

const zapierLink = "https://hooks.zapier.com/hooks/catch/*******/*******"; // replace with your Zapier link

```

Replace with your Zapier link and process the information however you'd like.

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Credits

👏 [UI Library](https://github.com/geist-org/react) has been used in this project


