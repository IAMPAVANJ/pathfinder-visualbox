import { AlgorithmSelectType, MazeSelectType, SpeedSelectType } from "./types";

export const MAX_COLS = 61;
export const MAX_ROWS = 41;

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
  row: MAX_ROWS - 2,
  col: MAX_COLS - 2,
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
  { name: "No Maze", value: "NONE" },
  { name: "Binary Tree", value: "binary" },
  { name: "Recursive Division", value: "recursive" },
];
export const SPEEDS: SpeedSelectType[] = [
  { name: "Slow", value: 2 },
  { name: "Medium", value: 1 },
  { name: "Fast", value: 0.5 },
];
export const PATHFINDING_ALGORITHMS: AlgorithmSelectType[] = [
  {name:"Dijkstra", value:"DIJKSTRA"},
  {name:"A-Star", value:"A_STAR"},
  {name:"Breath First Search", value:"BFS"},
  {name:"Depth First Search", value:"DFS"},
]
export const SLEEP_TIME = 8;
