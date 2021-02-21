const axios = require("axios");
const zapierLink = "https://hooks.zapier.com/hooks/catch/*******/*******";

export default async function handler(req, res) {
  try {
    let email = req.body.email;
    let first = req.body.first;
    let last = req.body.last;

    axios
      .post(zapierLink, {
        email: email === undefined || email === null ? "empty" : email,
        first: first === undefined || first === null ? "empty" : first,
        last: first === undefined || last === null ? "empty" : last,
      })
      .then((response) => {
        res.status(200).send({ ok: "ok" });
      });
  } catch (error) {
    res.status(500).send({ error: error });
  }
}
