import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [searchTerm, setSearch] = useState("az");
  const [datas, setDatas] = useState({
    data: [],
    isLoading: false,
    error: null,
  });

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
