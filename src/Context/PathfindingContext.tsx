import { ReactNode, useState } from "react";
import { AlgorithmType, GridType, MazeType } from "../utils/types";
import { createGrid } from "../utils/helpers";
import {
  endTileConfiguration,
  startTileConfiguration,
} from "../utils/constants";
import { PathfindingContext } from "./Contexts";

export const PathfindingProvider = ({ children }: { children: ReactNode }) => {
  const [algorithm, setAlgorithm] = useState<AlgorithmType>("BFS");
  const [maze, setMaze] = useState<MazeType>("NONE");
  const [isGraphVisualized, setIsGraphVisualized] = useState<boolean>(false);
  const [grid, setGrid] = useState<GridType>(
    createGrid(startTileConfiguration, endTileConfiguration)
  );
  return (
    <PathfindingContext.Provider
      value={{
        algorithm,
        setAlgorithm,
        maze,
        setMaze,
        grid,
        setGrid,
        isGraphVisualized,
        setIsGraphVisualized,
      }}
    >
      {children}
    </PathfindingContext.Provider>
  );
};
