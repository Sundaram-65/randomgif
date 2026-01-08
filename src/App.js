import { Random } from "./components/Random";
import { Tag } from "./components/Tag";
function App() {
  return (
    <div className="background flex flex-col min-h-screen w-full">
      
      <h1 className="text-3xl font-semibold">RANDOM GIF GENRATOR </h1>
      <div>
        <Random></Random>
        <Tag></Tag>
      </div>
    </div>
  );
}

export default App;
