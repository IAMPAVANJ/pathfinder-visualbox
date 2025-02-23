import { useRef } from "react";
import { Grid } from "./components/Grid";
import { PathfindingProvider } from "./Context/PathfindingContext";
import { SpeedProvider } from "./Context/SpeedContext";
import { TileProvider } from "./Context/TileContext";
import Nav from "./components/Nav";
import "./App.css";

function App() {
  const isVisualizationRunningRef = useRef(false);

  return (
    <PathfindingProvider>
      <TileProvider>
        <SpeedProvider>
          <div className="relative h-screen w-screen flex flex-col z-10 videoBG ">
            <Nav 
            // isVisualizationRunningRef={isVisualizationRunningRef}
            />
            <Grid isVisualizationRunningRef={isVisualizationRunningRef} />
          </div>
        </SpeedProvider>
      </TileProvider>
    </PathfindingProvider>
  );
}

export default App;
