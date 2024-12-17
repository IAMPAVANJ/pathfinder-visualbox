import React from "react";
import { usePathfinding } from "../hooks/usePathfinding";
import { twMerge } from "tailwind-merge";
import { maxCols, maxRows } from "../Utils/constants";
import { Tile } from "./Tile";

export function Grid() {
  const { grid } = usePathfinding();

  return (
    <div
      className={twMerge(
        // Base classes
        "flex flex-col items-center justify-center border-sky-400",
        // height as per devices
        `lg:min-h-[${maxRows * 17}px] md:min-h-[${maxRows * 15}px] xs:min-h-[${
          maxRows * 8
        }px] min-h-[${maxRows * 7}px]`,
        // width as per devices
        `lg:min-w-[${maxCols * 17}px] md:min-w-[${maxCols * 15}px] xs:min-h-[${
          maxRows * 8
        }px] min-w-[${maxCols * 7}px]`
      )}
    >
      {grid.map((row, rowIndex) => {
        return (
          <div key={rowIndex} className="flex">
            {row.map((tile, tileIndex) => {
              const { isStart, isEnd, isTraversed, isWall, isPath } = tile;
              return (
                <Tile
                  key={tileIndex}
                  row={tile.row}
                  col={tile.col}
                  isStart={isStart}
                  isEnd={isEnd}
                  isPath={isPath}
                  isTraversed={isTraversed}
                  isWall={isWall}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
