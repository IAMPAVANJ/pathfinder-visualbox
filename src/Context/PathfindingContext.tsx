import { createContext, ReactNode, useState } from "react";
import { AlgorithmType, GridType, MazeType } from "../Utils/types";
import { createGrid } from "../Utils/helpers";
import {
  endTileConfiguration,
  maxCols,
  maxRows,
  startTileConfiguration,
} from "../Utils/constants";

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

export const PathfindingContext = createContext<
  PathfindingContextInterface | undefined
>(undefined);

export const PathfindingProvider = ({ children }: { children: ReactNode }) => {
  const [algorithm, setAlgorithm] = useState<AlgorithmType>("BFS");
  const [maze, setMaze] = useState<MazeType>("NONE");
  const [grid, setGrid] = useState<GridType>(
    createGrid(startTileConfiguration, endTileConfiguration)
  );
  return (
    <PathfindingContext.Provider
      value={(algorithm, setAlgorithm, maze, setMaze, grid, setGrid)}
    >
      {children}
    </PathfindingContext.Provider>
  );
};
