const dao = require("../data/who/who-dao");
module.exports = (app) => {
  const findAllWho = (req, res) =>
    dao.findAllWho().then((who) => res.json(who));

  app.get("/rest/who", findAllWho);
};
