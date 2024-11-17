import { gameActions } from "../data/data";
import GameActionButton, { ResetButton } from "./GameActionButton";
import AnimationCom from "../animation/AnimationCom";
import { useSelector } from "react-redux";
import { selectTraveler } from "../traveler/travelerSlice";
import { GameStats } from "../types/gameStatsTypes";

const Traveler = () => {
  const travelerState = useSelector(selectTraveler);
  const gameStats: GameStats[] = [
    {
      stat: "Cash",
      value: travelerState.cash,
    },
    {
      stat: "Supplies",
      value: travelerState.supplies,
    },
    {
      stat: "Fatigue",
      value: travelerState.fatigue,
    },
    {
      stat: "Reputation",
      value: travelerState.reputation,
    },
    {
      stat: "Disrepair",
      value: travelerState.disrepair,
    },
    {
      stat: "Days",
      value: travelerState.days,
    },
    {
      stat: "Distance",
      value: travelerState.distance,
    },
  ];
  return (
    <section className="container mx-auto w-screen md:w-2/3 border-4  rounded-lg bg-white">
      <div className="flex justify-center mt-6">
        <div className="flex justify-around mt-6 p-3 md:w-[50rem] border rounded-xl bg-green-500">
          {gameStats.map((stat, index) => {
            return (
              <div key={stat + index}>
                <div className="text-lg font-mono">{stat.stat}</div>
                <div className="text-center">{stat.value}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex justify-center mt-14">
        <div className="flex max-w-[60rem] min-w-[30rem] justify-between pb-6 px-8">
          <div className="grid">
            {gameActions.slice(0, 4).map((gameAction, index) => {
              return (
                <GameActionButton
                  gameAction={gameAction}
                  key={gameAction + index}
                />
              );
            })}
          </div>
          <div className="w-[50rem] justify-center flex">
            <AnimationCom />
          </div>
          <div className="grid">
            {gameActions.slice(4, 7).map((gameAction, index) => {
              return (
                <GameActionButton
                  gameAction={gameAction}
                  key={gameAction + index}
                />
              );
            })}
            <ResetButton />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Traveler;
