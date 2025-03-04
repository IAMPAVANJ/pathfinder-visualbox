export type AlgorithmType = "DIJKSTRA" | "A_STAR" | "BFS" | "DFS";
export interface AlgorithmSelectType {
  name: string;
  value: AlgorithmType;
}

export type MazeType = "NONE" | "binary" | "recursive";
export interface MazeSelectType {
  name: string;
  value: MazeType;
}
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
export type SpeedType = 2 | 1 | 0.5;
export interface SpeedSelectType {
  name: string;
  value: SpeedType;
}
