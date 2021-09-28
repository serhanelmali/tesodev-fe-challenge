import { createContext, useContext, useState } from "react";
import getPersons from "../api/getPersons";

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [searchTerm, setSearchTerm] = useState("tasdasdasurk");
  const [persons, setPersons] = useState({
    message: null,
    data: [],
    isLoading: false,
    error: null,
  });

  const fetchPersons = (value) => {
    setPersons({
      data: [],
      isLoading: true,
      error: null,
    });

    getPersons(
      {
        onSuccess(result) {
          setPersons({
            data: result.data.data,
            isLoading: false,
            error: null,
          });
        },
        onError(error) {
          setPersons({
            data: [],
            error: error,
            isLoading: false,
          });
        },
      },
      value
    );

    console.log(persons);
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
