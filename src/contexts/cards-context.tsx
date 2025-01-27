import { createContext, ReactNode, useContext } from "react";
import { useCards, useCardsRes } from "../lib/hooks/useCards";

const CardsContext = createContext<useCardsRes | null>(null);

export const useCardsContext = () => {
  const context = useContext(CardsContext);

  if (!context) throw new Error("Context creation Error");

  return context;
};

export const CardsProvider = ({ children }: { children: ReactNode }) => {
  const { cards, changeCard } = useCards();

  return (
    <CardsContext.Provider value={{ cards, changeCard }}>
      {children}
    </CardsContext.Provider>
  );
};
