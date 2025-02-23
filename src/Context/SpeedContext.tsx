import { ReactNode, useState } from "react";
import { SpeedContext } from "./Contexts";
import { SpeedType } from "../utils/types";

export const SpeedProvider = ({ children }: { children: ReactNode }) => {
  const [speed, setSpeed] = useState<SpeedType>(0.5);
  return (
    <SpeedContext.Provider value={{ speed, setSpeed }}>
      {children}
    </SpeedContext.Provider>
  );
};
