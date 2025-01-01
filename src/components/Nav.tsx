import { useState } from "react";
import { usePathfinding } from "../hooks/usePathfinding";
import { useTile } from "../hooks/useTile";
import { Mazes } from "../Utils/constants";
import { resetGrid } from "../Utils/ResetGrid";
import { MazeType } from "../Utils/types";
import Select from "./Select";
import { runMazeAlgorithm } from "../Utils/runMazeAlgorithm";
import { useSpeed } from "../hooks/useSpeed";

const Nav = () => {
  const [isDisabled, setIsDisabled] = useState(false);
  const { maze, setMaze, grid } = usePathfinding();
  const { startTile, endTile } = useTile();
  const { speed } = useSpeed();
  const handleGenerateMaze = (maze: MazeType) => {
    if (maze === "none") {
      setMaze(maze);
      resetGrid({ grid, startTile, endTile });
      return;
    }
    setMaze(maze);
    setIsDisabled(true);
    runMazeAlgorithm({
      maze,
      grid,
      startTile,
      endTile,
      setIsDisabled,
      speed,
    });
  };
  return (
    <div className="flex items-center justify-center min-h-[4.5rem] border-b shadow-gray-600 sm:px-5 px-0">
      <div className="flex items-center lg:justify-between justify-center w-full sm:w-[52rems]">
        <h1 className="lg:flex hidden w-auto text-2xl pl-1">Path finder</h1>
        <div className=" flex sm:items-end items-center justify-start sm:justify-between sm:flex-row flex-col sm:space-y-0 space-y-3 sm:py-0 py-4 sm:space-x-4">
          <Select
            label="Maze"
            value={maze}
            options={Mazes}
            onChange={(e) => {
              console.log(e);
              handleGenerateMaze(e.target.value as MazeType);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
