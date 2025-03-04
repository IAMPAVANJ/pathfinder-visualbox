import { bfs } from "../lib/Algorithms/pathfinding/bfs";
import { GridType, TileType } from "./types";

export const runPathfindingAlgorithm = ({
    algorithm,
    grid,
    startTile,
    endTile,
  }: {
    algorithm: string;
    grid: GridType;
    startTile: TileType;
    endTile:TileType
})=>{
    switch(algorithm){
        case "BFS":
            return bfs(grid, startTile, endTile);
        default:
            return bfs(grid, startTile, endTile);
    }
}