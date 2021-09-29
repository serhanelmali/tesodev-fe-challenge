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

  const [currentPage, setCurrentPage] = useState(0);
  const personsPerPage = 6;
  const indexOfLastPerson = currentPage * personsPerPage;
  const indexOfFirstPerson = indexOfLastPerson - personsPerPage;
  const currentPersons = persons.data.slice(
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
  };

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
