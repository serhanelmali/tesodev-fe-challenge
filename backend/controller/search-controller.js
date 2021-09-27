const personData = require("../store/mockData.json");
const searchPerson = require("../utils/searchPerson");
const searchResults = require("../store/searchResults");

const sendData = async (req, res) => {
  const searchTerm = req.query.searchterm;
  try {
    searchPerson(personData.data, searchTerm, searchResults);
    res.json(searchResults);
  } catch (err) {
    console.log(err);
  }
};

module.exports = { sendData };
