import { createContext, useContext, useState } from "react";
import getPersons from "../api/getPersons";

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [persons, setPersons] = useState({
    message: null,
    data: [],
    error: null,
  });

  const sortBy = (data, value) => {
    if (value === "yearA") {
      return data.sort((a, b) =>
        a.date.substr(a.date.length - 4) > b.date.substr(b.date.length - 4)
          ? 1
          : -1
      );
    }

    if (value === "yearB") {
      return data.sort((a, b) =>
        a.date.substr(a.date.length - 4) < b.date.substr(b.date.length - 4)
          ? 1
          : -1
      );
    }

    if (value === "nameA") {
      return data.sort((a, b) => (a.fullname > b.fullname ? 1 : -1));
    }
  };

  const [sortValue, setSortValue] = useState("yearA");
  const [currentPage, setCurrentPage] = useState(0);
  const personsPerPage = 6;
  const indexOfLastPerson = currentPage * personsPerPage;
  const indexOfFirstPerson = indexOfLastPerson - personsPerPage;
  const currentPersons = sortBy(persons.data, sortValue).slice(
    indexOfFirstPerson,
    indexOfLastPerson
  );

  //todo empty search fix - min 3 characters
  const fetchPersons = (value) => {
    setPersons({
      data: [],
      error: null,
    });

    getPersons(
      {
        onSuccess(result) {
          setPersons({
            data: result.data.data,
            error: null,
          });
        },
        onError(error) {
          setPersons({
            data: [],
            error: error,
          });
        },
      },
      value
    );
    setCurrentPage(1);
  };

  let sharedState = {
    searchTerm,
    setSearchTerm,
    persons,
    setPersons,
    fetchPersons,
    currentPage,
    currentPersons,
    personsPerPage,
    setCurrentPage,
    setSortValue,
  };

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
