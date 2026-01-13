import { Random } from "./components/Random.jsx";
import { Tag } from "./components/Tag.jsx";
function App() {
  return (
    <div className="background flex flex-col min-h-screen w-full items-center">
      <h1 className="text-3xl font-bold bg-white mt-[40px] text-center rounded-xl w-11/12">RANDOM GIF GENRATOR </h1>
   
        <Random></Random>
        <Tag></Tag>
      
    </div>
  );
}

export default App;
