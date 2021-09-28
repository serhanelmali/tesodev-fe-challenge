import { createContext, useContext, useState } from "react";
import getData from "../api/get-data";

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [searchTerm, setSearch] = useState("az");
  const [datas, setDatas] = useState({
    data: [],
    isLoading: false,
    error: null,
  });

  const fetchDatas = (value) => {
    getData(value);
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
