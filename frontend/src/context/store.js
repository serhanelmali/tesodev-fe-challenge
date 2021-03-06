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

    if (value === "yearD") {
      return data.sort((a, b) =>
        a.date.substr(a.date.length - 4) < b.date.substr(b.date.length - 4)
          ? 1
          : -1
      );
    }

    if (value === "nameA") {
      return data.sort((a, b) =>
        a.fullname.toString() > b.fullname.toString() ? 1 : -1
      );
    }

    if (value === "nameD") {
      return data.sort((a, b) =>
        a.fullname.toString() < b.fullname.toString() ? 1 : -1
      );
    }
  };

  const [sortValue, setSortValue] = useState("nameA");
  const [currentPage, setCurrentPage] = useState(0);
  const personsPerPage = 6;
  const indexOfLastPerson = currentPage * personsPerPage;
  const indexOfFirstPerson = indexOfLastPerson - personsPerPage;
  const currentPersons = sortBy(persons.data, sortValue).slice(
    indexOfFirstPerson,
    indexOfLastPerson
  );
  const [isError, setIsError] = useState(false);

  const fetchPersons = (value) => {
    setIsError(false);
    setPersons({
      data: [],
      error: null,
    });

    if (value.length >= 3) {
      return (
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
        ),
        setCurrentPage(1)
      );
    } else setIsError(true);
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
    isError,
  };

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
