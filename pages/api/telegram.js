const axios = require("axios");
const telegramToken = process.env.TELEGRAM_BOT_TOKEN; // replace with your telegram token
const telegramChatID = "-1001199562757"; // replace with your telegram chat id

export default async function handler(req, res) {
  try {
    let email = req.body.email;
    let first = req.body.first;
    let last = req.body.last;

    let message = email + "  -  " + first + "  -  " + last;

    const linkTemplate = `https://api.telegram.org/bot${telegramToken}/sendMessage?chat_id=${telegramChatID}&text=${message}`;
    const finLink = encodeURI(linkTemplate);
    console.log(finLink);

    axios.get(finLink).then((response) => {
      res.status(200).send(response);
    });
  } catch (error) {
    res.status(500).send({ error: error });
  }
}
