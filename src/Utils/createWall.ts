import { SPEEDS } from "./constants";
import { SpeedType, TileType } from "./types";

export const createWall = (
  startTile: TileType,
  endTile: TileType,
  speed: SpeedType
) => {
  const delay = 6*SPEEDS.find((s)=>s.value===speed)!.value-1;
};
