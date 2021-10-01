const searchPerson = require("../utils/searchPerson");

const personData = {
  cols: ["Name Surname", "Company", "Email", "Date", "Country", "City"],
  data: [
    [
      "Hyacinth Vincent",
      "Duis Corporation",
      "iaculis.enim@magnaCrasconvallis.ca",
      "28/06/2022",
      "Eritrea",
      "Lyubertsy",
    ],
    [
      "Brenden Martinez",
      "Volutpat Nunc Associates",
      "iaculis@estMauris.org",
      "24/03/2021",
      "British Indian Ocean Territory",
      "Colwood",
    ],
    [
      "Lunea Kinney",
      "Ornare Facilisis Eget Incorporated",
      "rutrum.eu@liberoMorbiaccumsan.ca",
      "20/10/2021",
      "Jordan",
      "Yorkton",
    ],
    [
      "Byron Fitzgerald",
      "Ipsum Corporation",
      "justo.sit.amet@vel.co.uk",
      "30/06/2022",
      "Benin",
      "Bostaniçi",
    ],
    [
      "Ocean Oneil",
      "Magna Nec PC",
      "in@risus.ca",
      "25/07/2021",
      "Mali",
      "Crystal Springs",
    ],
    [
      "Deborah Schmidt",
      "Dolor Industries",
      "Nullam.scelerisque.neque@Nullafacilisis.co.uk",
      "27/12/2021",
      "Comoros",
      "Sevastopol",
    ],
    [
      "Jemima Savage",
      "Tristique Pharetra Quisque Corporation",
      "et@tinciduntnunc.com",
      "21/04/2022",
      "Honduras",
      "Renfrew",
    ],
    [
      "Yvonne Washington",
      "Tempor Incorporated",
      "posuere.cubilia.Curae@tellusjustosit.com",
      "23/12/2021",
      "South Sudan",
      "Birmingham",
    ],
  ],
};
let searchResults = [];

describe("searchPerson function", () => {
  beforeEach(() => {
    searchResults = [];
  });

  it("searches and adds result to searchResults", () => {
    searchPerson(personData.data, "brenden", searchResults);
    expect(searchResults).toHaveLength(1);
  });

  it("finds right person and adds it to searchResults", () => {
    searchPerson(personData.data, "lunea", searchResults);
    expect(searchResults).toHaveLength(1);
    expect(searchResults[0].fullname).toEqual(personData.data[2][0]);
  });
});
