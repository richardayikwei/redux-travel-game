import Traveler from "../features/traveler/Traveler";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="bg-blue-500 2xl:h-screen">
      <header className="h-20 flex items-center justify-center bg-blue-400">
        <h1 className="text-3xl text-black">Traveler Game</h1>
      </header>
      <main className="mt-6">
        <Traveler />
        <ToastContainer />
      </main>
    </div>
  );
}

export default App;
