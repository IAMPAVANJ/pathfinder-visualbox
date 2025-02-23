import { binaryTree } from "../lib/Algorithms/maze/binaryTree";
import { recursiveDivision } from "../lib/Algorithms/maze/recursiveDivision";
import { MAX_COLS as maxCols, MAX_ROWS as maxRows, SPEEDS } from "./constants";
import { constructBorder } from "./constructBorder";
import { GridType, MazeType, SpeedType, TileType } from "./types";

export const runMazeAlgorithm = async ({
  maze,
  grid,
  startTile,
  endTile,
  setIsDisabled,
  speed,
}: {
  maze: MazeType;
  grid: GridType;
  startTile: TileType;
  endTile: TileType;
  setIsDisabled: (isDisabled: boolean) => void;
  speed: SpeedType;
}) => {
  if (maze === "binary") {
    await binaryTree(grid, startTile, endTile, setIsDisabled, speed);
  } else if (maze === "recursive") {
    const currentSpeed = SPEEDS.find((s) => s.value === speed)!.value ?? 2;

    await constructBorder(grid, startTile, endTile);
    await recursiveDivision({
      grid,
      startTile,
      endTile,
      row: 1,
      col: 1,
      height: Math.floor(maxRows - 1) / 2,
      width: Math.floor(maxCols - 1) / 2,
      setIsDisabled,
      speed,
    });
    setTimeout(() => setIsDisabled(false), 800 * currentSpeed);
  }
};
