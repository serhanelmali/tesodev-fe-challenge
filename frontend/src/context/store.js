import { createContext, useContext, useState } from "react";
import getPersons from "../api/getPersons";

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [searchTerm, setSearchTerm] = useState("tur");
  const [persons, setPersons] = useState({
    message: null,
    data: [],
    error: null,
  });

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
  };

  let sharedState = {
    searchTerm,
    setSearchTerm,
    persons,
    setPersons,
    fetchPersons,
  };

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
