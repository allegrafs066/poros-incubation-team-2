import { useState } from "react";
import GlobalContext from "./GlobalContext";

function GlobalContextProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);

  return (
    <GlobalContext.Provider value={{ cartProducts, setCartProducts }}>
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalContextProvider;
