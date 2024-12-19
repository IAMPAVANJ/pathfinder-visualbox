import { twMerge } from "tailwind-merge";
import {
  END_TILE_STYLE,
  maxCols,
  maxRows,
  PATH_TILE_STYLE,
  START_TILE_STYLE,
  TILE_STYLE,
  TRAVERSED_TILE_STYLE,
  WALL_TILE_STYLE,
} from "../Utils/constants";
import React from "react";

interface MouseFunction {
  (row: number, col: number): void;
}

export const Tile = React.memo(
  ({
    row,
    col,
    isStart,
    isEnd,
    isTraversed,
    isWall,
    isPath,
    handleMouseDown,
    handleMouseUp,
    handleMouseEnter,
  }: {
    row: number;
    col: number;
    isStart: boolean;
    isEnd: boolean;
    isTraversed: boolean;
    isWall: boolean;
    isPath: boolean;
    handleMouseDown: MouseFunction;
    handleMouseUp: MouseFunction;
    handleMouseEnter: MouseFunction;
  }) => {
    const tileStyle = isStart
      ? START_TILE_STYLE
      : isEnd
      ? END_TILE_STYLE
      : isTraversed
      ? TRAVERSED_TILE_STYLE
      : isWall
      ? WALL_TILE_STYLE
      : isPath
      ? PATH_TILE_STYLE
      : TILE_STYLE;

    const borderStyle =
      row === maxRows - 1
        ? "border-b"
        : col === 0
        ? "border-l"
        : row === 0
        ? "border-t"
        : col === maxCols - 1
        ? "border-r"
        : "";
    return (
      <div
        className={twMerge(tileStyle, borderStyle)}
        id={`${row}-${col}`}
        onMouseDown={() => handleMouseDown(row, col)}
        onMouseUp={() => handleMouseUp(row, col)}
        onMouseEnter={() => handleMouseEnter(row, col)}
      />
    );
  }
);
