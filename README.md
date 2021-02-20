# Next.js blog using Notion.so as CMS

➕ a simple integration with Telegram for information capture.


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

To use it you need to create your own database. Copy it from this link https://www.notion.so/whatifbelief/**88f847314b884d228431da3b1fe44a5a**?v=b3838604e52c40c7bb5a8984a554dc31. After you import it into your notion workplace you need to replace the notion id in the repository with your id.

```
next.config.js

module.exports = {
  env: {
    notionTableId: "88f847314b884d228431da3b1fe44a5a", //replace this id this your Notion table id
  },
};

```

## Telegram integration

```
pages/api/telegram.js

const telegramToken = process.env.TELEGRAM_BOT_TOKEN; // replace with your telegram token
const telegramChatID = "-1001199562757"; // replace with your telegram chat id

```

[This Medium article](https://sean-bradley.medium.com/get-telegram-chat-id-80b575520659) can help you to find this information.
Otherwise, you can remove this Telegram integration at all

## License

[MIT](https://choosealicense.com/licenses/mit/)
