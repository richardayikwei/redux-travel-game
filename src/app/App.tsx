import Traveler from "../features/traveler/Traveler";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <header className="h-20 flex items-center justify-center bg-blue-400">
        <h1 className="text-3xl text-black">Traveler Game</h1>
      </header>
      <Traveler />
      <ToastContainer />
    </>
  );
}

export default App;
