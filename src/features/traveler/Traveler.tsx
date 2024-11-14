import { useSelector } from "react-redux";
import { GameAction } from "../types/GameActiontypes";
import GameActionButton, { ResetButton } from "./GameActionButton";
import { selectTraveler } from "./travelerSlice";
import AnimationCom from "../animation/AnimationCom";

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
    <section className="container mx-auto w-screen md:w-2/3 border border-bl px-6 pb-6 rounded-lg">
      <div className="flex justify-between mt-6 md:max-w-[100rem]">
        <AnimationCom />
        <table className="border-2 w-36 text-center h-20">
          <tbody>
            <tr>
              <th className="w-10 h-16">Cash</th>
              <td className="w-10 h-16">${travelerState.cash}</td>
            </tr>
            <tr>
              <th className="w-10 h-16">Supplies</th>
              <td className="w-10 h-16">{travelerState.supplies}</td>
            </tr>
            <tr>
              <th className="w-10 h-16">Fatigue</th>
              <td className="w-10 h-16">{travelerState.fatigue}</td>
            </tr>
            <tr>
              <th className="w-10 h-16">Reputation</th>
              <td className="w-10 h-16">{travelerState.reputation}</td>
            </tr>

            <tr>
              <th className="w-10 h-16">Disrepair</th>
              <td className="w-10 h-16">{travelerState.disrepair}</td>
            </tr>
            <tr>
              <th className="w-10 h-16">Days</th>
              <td className="w-10 h-16">{travelerState.days}</td>
            </tr>
            <tr>
              <th className="w-10 h-14">Distance</th>
              <td className="w-10 h-14">{travelerState.distance}</td>
            </tr>
            <tr className="col-span-2 flex pl-2">
              <th className="w-10">
                <ResetButton />
              </th>
            </tr>
          </tbody>
        </table>
      </div>
      <hr className="mt-6" />
      <div className="text-center md:hidden">
        <span className="mr-24 animate-pulse text-2xl bold text-blue-600">
          {"<<"}
        </span>
        Scroll
        <span className="ml-24 animate-pulse text-2xl bold text-blue-600">
          {">>"}
        </span>
      </div>
      <div className="flex justify-between mt-5 md:max-w-[100rem] overflow-x-auto md:overflow-hidden">
        {gameActions.map((gameAction, idx) => {
          return (
            <GameActionButton
              key={idx + gameAction.name}
              gameAction={gameAction}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Traveler;
