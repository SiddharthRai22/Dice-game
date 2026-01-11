import { useState } from "react"
import StartGame from "./components/StartGame"
import GamePlay from "./components/GamePlay";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

//   const toggleGamePlay = () => {
//   if (isGameStarted === false) {
//     setIsGameStarted(true);
//   } else {
//     setIsGameStarted(false);
//   }
// };
  const toggleGamePlay = () => {                
    setIsGameStarted((prev) => !prev);
  };

  return (
    <>
      {isGameStarted ? <GamePlay/> : <StartGame toggle = {toggleGamePlay}/>}
    </>
  )
}

export default App
