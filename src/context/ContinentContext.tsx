import { createContext, FC, useState } from "react";
import { Continent } from "../types/Continent";

interface ContinentContextData {
  selectedContinent: Continent
  handleSelectContinent: (continent: Continent) => void
}

export const ContinentContext = createContext({} as ContinentContextData)

export const ContinentContextProvider: FC = ({ children }) => {
  const [selectedContinent, setSelectedContinent] = useState<Continent>({} as Continent)

  const handleSelectContinent = (continent: Continent) => {
    setSelectedContinent(continent)
  }

  return (
    <ContinentContext.Provider value={{
      selectedContinent,
      handleSelectContinent
    }}>
      {children}
    </ContinentContext.Provider>
  )
}