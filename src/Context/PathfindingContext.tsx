import { ReactNode, useState } from "react";
import { AlgorithmType, GridType, MazeType } from "../Utils/types";
import { createGrid } from "../Utils/helpers";
import {
  endTileConfiguration,
  startTileConfiguration,
} from "../Utils/constants";
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
