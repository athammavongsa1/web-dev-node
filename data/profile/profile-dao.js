const model = require("./profile-model");

const findProfileById = (id) => model.find(id);
const findAllProfile = () => model.find();

module.exports = {
  findProfileById,
  findAllProfile,
};
