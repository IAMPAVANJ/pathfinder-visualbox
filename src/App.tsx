import { Grid } from "./components/Grid";
import { PathfindingProvider } from "./Context/PathfindingContext";
import { SpeedProvider } from "./Context/SpeedContext";
import { TileProvider } from "./Context/TileContext";

function App() {
  return (
    <PathfindingProvider>
      <TileProvider>
        <SpeedProvider>
          <div className="h-screen w-screen flex flex-col">
            <Grid />
          </div>
        </SpeedProvider>
      </TileProvider>
    </PathfindingProvider>
  );
}

export default App;
