const { sendData } = require("../controller/searchController");
const searchResults = require("../store/searchResults");

const req = {
  query: {
    searchterm: "brenden",
  },
};

const res = {
  json: jest.fn,
};

describe("sendData controller", () => {
  it("searches data by searchTerm", () => {
    sendData(req, res);
    expect(searchResults[0].fullname).toEqual("Brenden Martinez");
  });
});
