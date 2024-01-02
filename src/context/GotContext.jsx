import { createContext, useContext, useEffect, useState } from "react";
import { fetchCharacters } from "../services/pokemon";

const initialState = {
  characters: [],
  query: "",
  selected: null,
  isLoading: false,
};

const GotContext = createContext();

export default function GotProvider({ children }) {
  const [characters, setCharacters] = useState([]);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState({});
  const [isLoading, setIsloading] = useState({});

  useEffect(() => {
    setIsloading(true);
    fetchCharacters().then((data) => {
      setCharacters(data);
      setIsloading(false);
    });
  }, []);

  function handleSlection(input) {
    const isSame = input.id === selected.id;
    setSelected(() => (isSame ? {} : input));
  }

  return (
    <GotContext.Provider
      value={{
        characters,
        query,
        selected,
        isLoading,
        setQuery,
        setSelected: handleSlection,
      }}
    >
      {children}
    </GotContext.Provider>
  );
}

export function useGot() {
  const context = useContext(GotContext);
  if (!context) {
    throw new Error("The context must be used within a GOT context");
  }
  return context;
}
