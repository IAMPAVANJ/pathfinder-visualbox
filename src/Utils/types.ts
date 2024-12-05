export type AlgorithmType = "DIJKSTRA" | "A_STAR" | "BFS" | "DFS";
export type MazeType = "NONE" | "BINARY TREE" | "RECURSIVE DIVISION" | "RANDOM";
export type TileType = {
  row: number;
  col: number;
  isStart: boolean;
  isEnd: boolean;
  isWall: boolean;
  isPath: boolean;
  distance: number;
  parent: TileType | null;
  isTraversed: boolean;
};
export type GridType = TileType[][];
