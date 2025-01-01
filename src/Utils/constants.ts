import { MazeSelectType, SpeedSelectType } from "./types";

export const maxRows = 41;
export const maxCols = 41;

export const startTileConfiguration = {
  row: 1,
  col: 1,
  isStart: false,
  isEnd: false,
  isWall: false,
  isPath: false,
  distance: 0,
  parent: null,
  isTraversed: false,
};
export const endTileConfiguration = {
  row: maxRows - 2,
  col: maxCols - 2,
  isStart: false,
  isEnd: false,
  isWall: false,
  isPath: false,
  distance: 0,
  parent: null,
  isTraversed: false,
};

export const TILE_STYLE =
  "lg:w-[17px] md:w-[15px] xs:w-[8px] w-[7px] lg:h-[17px] md:h-[15px] xs:h-[8px] h-[7px] border-t border-r border-sky-200";
export const TRAVERSED_TILE_STYLE = TILE_STYLE + " bg-cyan-500";
export const START_TILE_STYLE = TILE_STYLE + " bg-green-500";
export const END_TILE_STYLE = TILE_STYLE + " bg-red-600";
export const WALL_TILE_STYLE = TILE_STYLE + " bg-gray-200";
export const PATH_TILE_STYLE = TILE_STYLE + " bg-green-600";

export const Mazes: MazeSelectType[] = [
  { name: "No Maze", value: "none" },
  { name: "Binary Tree", value: "binary" },
  { name: "Recursive Division", value: "recursive" },
];
export const SPEEDS: SpeedSelectType[] = [
  { name: "Slow", value: 2 },
  { name: "Medium", value: 1 },
  { name: "Fast", value: 0.5 },
];
