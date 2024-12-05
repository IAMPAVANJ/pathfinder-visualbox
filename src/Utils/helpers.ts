import { maxCols, maxRows } from "./constants";
import { GridType, TileType } from "./types";

const createRow = (row: number, startTile: TileType, endTile: TileType) => {
  const currentRow = [];
  for (let col = 0; col < maxCols; col++) {
    currentRow.push({
      row: row,
      col: col,
      isEnd: row === endTile.row && col === endTile.col,
      isStart: row === startTile.row && col === startTile.col,
      isWall: false,
      isPath: false,
      distance: Infinity,
      isTraversed: false,
      parent: null,
    });
  }
  return currentRow;
};

export const createGrid = (startTile: TileType, endTile: TileType) => {
  const grid: GridType = [];
  for (let row = 0; row < maxRows; row++) {
    grid.push(createRow(row, startTile, endTile));
  }
  return grid;
};
