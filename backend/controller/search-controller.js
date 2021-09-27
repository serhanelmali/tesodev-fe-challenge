const personData = require("../store/mockData.json");
const searchPerson = require("../utils/searchPerson");
const searchResults = require("../store/searchResults");

const sendData = async (req, res) => {
  const searchTerm = req.query.searchterm;
  try {
    searchPerson(personData.data, searchTerm, searchResults);
    res.json({
      message: `Search completed successfully. ${searchResults.length} results found.`,
      data: searchResults,
    });
  } catch (err) {
    res.json({
      message: `An error occured.`,
      error: err,
    });
  }
};

module.exports = { sendData };
