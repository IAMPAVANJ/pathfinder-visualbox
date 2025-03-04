import {
  endTileConfiguration,
  MAX_COLS as maxCols,
  MAX_ROWS as maxRows,
  startTileConfiguration,
  TILE_STYLE,
} from "./constants";
import { isEqual } from "./helpers";
import { GridType, TileType } from "./types";
export const resetGrid = ({
  grid,
  startTile = startTileConfiguration,
  endTile = endTileConfiguration,
}: {
  grid: GridType;
  startTile?: TileType;
  endTile?: TileType;
}) => {
  for (let row = 0; row < maxRows; row++) {
    for (let col = 0; col < maxCols; col++) {
      const tile = grid[row][col];
      tile.distance = 0;
      tile.isTraversed = false;
      tile.isPath = false;
      tile.parent = null;
      tile.isWall = false;

      if (!isEqual(startTile, tile) && !isEqual(endTile, tile)) {
        const tileElement = document.getElementById(`${tile.row}-${tile.col}`);
        if (tileElement) {
          tileElement.className = TILE_STYLE;
        }
        if (tile.row === maxRows - 1) {
          tileElement?.classList?.add("border-b");
        }
        if (tile.col === 0) {
          tileElement?.classList?.add("border-l");
        }
      }
    }
  }
};
