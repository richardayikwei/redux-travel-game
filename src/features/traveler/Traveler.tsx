import { useSelector } from "react-redux";
import { GameAction } from "../types/GameActiontypes";
import GameActionButton, { ResetButton } from "./GameActionButton";
import { selectTraveler } from "./travelerSlice";

const Traveler = () => {
  const travelerState = useSelector(selectTraveler);

  const gameActions: GameAction[] = [
    {
      name: "Travel",
      backgroundColor: "bg-green-100",
    },
    {
      name: "Gather",
      backgroundColor: "bg-green-200",
    },
    {
      name: "Sell",
      backgroundColor: "bg-green-300",
    },
    {
      name: "Repair",
      backgroundColor: "bg-green-400",
    },
    {
      name: "Buy",
      backgroundColor: "bg-green-500",
    },
    {
      name: "Rest",
      backgroundColor: "bg-green-600",
    },
    {
      name: "Steal",
      backgroundColor: "bg-green-700",
    },
  ];

  return (
    <section>
      <div className="flex justify-evenly mt-5">
        {gameActions.map((gameAction, idx) => {
          return (
            <GameActionButton
              key={idx + gameAction.name}
              gameAction={gameAction}
            />
          );
        })}
      </div>
      <div className="flex justify-center mt-6">
        <table className="border-2 table-auto text-center h-20 divide-y">
          <thead>
            <tr className="divide-x-2 ">
              <th className="p-4">Cash</th>
              <th className="p-4">Supplies</th>
              <th className="p-4">Fatigue</th>
              <th className="p-4">Reputation</th>
              <th className="p-4">Disrepair</th>
              <th className="p-4">Days</th>
            </tr>
          </thead>
          <tbody>
            <tr className="divide-x-2">
              <td>${travelerState.cash}</td>
              <td>{travelerState.supplies}</td>
              <td>{travelerState.fatigue}</td>
              <td>{travelerState.reputation}</td>
              <td>{travelerState.disrepair}</td>
              <td>{travelerState.days}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex justify-center mt-6">
        <ResetButton />
      </div>
    </section>
  );
};

export default Traveler;
