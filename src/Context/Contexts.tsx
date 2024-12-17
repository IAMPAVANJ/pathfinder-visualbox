import { createContext } from "react";
import {
  AlgorithmType,
  GridType,
  MazeType,
  SpeedType,
  TileType,
} from "../Utils/types";
interface PathfindingContextInterface {
  algorithm: AlgorithmType;
  setAlgorithm: (algorithm: AlgorithmType) => void;
  maze: MazeType;
  setMaze: (maze: MazeType) => void;
  grid: GridType;
  setGrid: (grid: GridType) => void;
  isGraphVisualized: boolean;
  setIsGraphVisualized: (isGraphVisualized: boolean) => void;
}
interface TileContextInterface {
  startTile: TileType;
  setStartTile: (tile: TileType) => void;
  endTile: TileType;
  setEndTile: (tile: TileType) => void;
}
interface SpeedContextInterface {
  speed: SpeedType;
  setSpeed: (speed: SpeedType) => void;
}

export const TileContext = createContext<TileContextInterface | undefined>(
  undefined
);

export const PathfindingContext = createContext<
  PathfindingContextInterface | undefined
>(undefined);

export const SpeedContext = createContext<SpeedContextInterface | undefined>(
  undefined
);
