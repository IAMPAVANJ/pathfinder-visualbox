import { useRef } from "react";
import { Grid } from "./components/Grid";
import { PathfindingProvider } from "./Context/PathfindingContext";
import { SpeedProvider } from "./Context/SpeedContext";
import { TileProvider } from "./Context/TileContext";
import Nav from "./components/Nav";

function App() {
  const isVisualizationRunningRef = useRef(false);

  return (
    <PathfindingProvider>
      <TileProvider>
        <SpeedProvider>
          <div className="h-screen w-screen flex flex-col">
            <Nav />
            <Grid isVisualizationRunningRef={isVisualizationRunningRef} />
          </div>
        </SpeedProvider>
      </TileProvider>
    </PathfindingProvider>
  );
}

export default App;
