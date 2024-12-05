export const maxRows = 39;
export const maxCols = 49;

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
