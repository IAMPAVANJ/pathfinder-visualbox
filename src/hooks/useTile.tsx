import { useContext } from "react";
import { TileContext } from "../Context/Contexts";

export const useTile = () => {
  const context = useContext(TileContext);

  if (!context) {
    throw new Error("useTile must be used within a TileContextProvider");
  }
  return context;
};
