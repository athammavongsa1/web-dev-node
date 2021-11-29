const dao = require("../data/profile/profile-dao");
module.exports = (app) => {
  const findProfileById = (req, res) =>
    dao.findProfileById().then((profileConst) => res.json(profileConst));

  app.get("/rest/profile/:id", findProfileById);

  const updateProfile = (req, res) => {
    const id = req.params.id;
    dao.updateProfile(id, req.body).then((updated) => {
      return res.json(updated);
    });
  };

  app.put("/rest/profile/:id", updateProfile);
};
