import { useState, ReactNode } from "react";
import {
  endTileConfiguration,
  startTileConfiguration,
} from "../utils/constants";
import { TileType } from "../utils/types";
import { TileContext } from "./Contexts";

export const TileProvider = ({ children }: { children: ReactNode }) => {
  const [startTile, setStartTile] = useState<TileType>(startTileConfiguration);
  const [endTile, setEndTile] = useState<TileType>(endTileConfiguration);

  return (
    <TileContext.Provider
      value={{ startTile, setStartTile, endTile, setEndTile }}
    >
      {children}
    </TileContext.Provider>
  );
};
