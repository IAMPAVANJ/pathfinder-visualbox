import React, { MutableRefObject, useState } from "react";
import { usePathfinding } from "../hooks/usePathfinding";
import { twMerge } from "tailwind-merge";
import { maxCols, maxRows } from "../Utils/constants";
import { Tile } from "./Tile";
import { checkIsStartOrEnd, createNewGrid } from "../Utils/helpers";

export const Grid = React.memo(
  ({
    isVisualizationRunningRef,
  }: {
    isVisualizationRunningRef: MutableRefObject<boolean>;
  }) => {
    const { grid, setGrid } = usePathfinding();
    const [isMouseDown, setIsMouseDown] = useState(false);
    const handleMouseDown = (row: number, col: number) => {
      if (isVisualizationRunningRef.current || checkIsStartOrEnd(row, col)) {
        return;
      }
      setIsMouseDown(true);
      const newGrid = createNewGrid(grid, row, col);
      setGrid(newGrid);
    };

    const handleMouseUp = (row: number, col: number) => {
      if (isVisualizationRunningRef.current || checkIsStartOrEnd(row, col)) {
        return;
      }
      setIsMouseDown(false);
    };

    const handleMouseEnter = (row: number, col: number) => {
      if (isVisualizationRunningRef.current || checkIsStartOrEnd(row, col)) {
        return;
      }
      if (isMouseDown) {
        const newGrid = createNewGrid(grid, row, col);
        setGrid(newGrid);
      }
    };

    return (
      <div
        className={twMerge(
          // Base classes
          "flex flex-col items-center justify-center border-sky-400 mt-10",
          // height as per devices
          `lg:min-h-[${maxRows * 17}px] md:min-h-[${
            maxRows * 15
          }px] xs:min-h-[${maxRows * 8}px] min-h-[${maxRows * 7}px]`,
          // width as per devices
          `lg:min-w-[${maxCols * 17}px] md:min-w-[${
            maxCols * 15
          }px] xs:min-h-[${maxRows * 8}px] min-w-[${maxCols * 7}px]`
        )}
      >
        {grid.map((r, rowIndex) => {
          return (
            <div key={rowIndex} className="flex">
              {r.map((tile, tileIndex) => {
                const {
                  row,
                  col,
                  isStart,
                  isEnd,
                  isTraversed,
                  isWall,
                  isPath,
                } = tile;
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
                    handleMouseDown={() => handleMouseDown(row, col)}
                    handleMouseUp={() => handleMouseUp(row, col)}
                    handleMouseEnter={() => handleMouseEnter(row, col)}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    );
  }
);
