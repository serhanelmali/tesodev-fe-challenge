import { createContext, useContext, useState } from "react";
import getPersons from "../api/getPersons";

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [searchTerm, setSearch] = useState("az");
  const [persons, setPersons] = useState({
    data: [],
    isLoading: false,
    error: null,
  });

  const fetchPersons = () => {
    setPersons({
      data: [],
      isLoading: true,
      error: null,
    });

    getPersons({
      onSucces(result) {
        setPersons({
          data: result.data,
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
    });
  };

  let sharedState = {
    searchTerm,
  };

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
