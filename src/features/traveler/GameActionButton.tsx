import { useState } from "react";
import { GameAction } from "../types/GameActiontypes";
import { useDispatch } from "react-redux";
import {
  travel,
  gather,
  sell,
  repair,
  buy,
  rest,
  steal,
  reset,
} from "./travelerSlice";

type GameActionButtonProps = {
  gameAction: GameAction;
};

export default function GameActionButton({
  gameAction,
}: GameActionButtonProps) {
  const [traveling, setTraveling] = useState(0);
  const [gathering, setGathering] = useState(0);
  const [repairing, setRepairing] = useState(0);
  const [selling, setSelling] = useState(0);
  const [buying, setBuying] = useState(0);
  const [resting, setResting] = useState(0);
  const [stealing, setStealing] = useState(0);

  const dispatch = useDispatch();

  function onHandleClick(name: string) {
    switch (name) {
      case "Travel":
        dispatch(travel(Number(traveling)));
        break;
      case "Gather":
        dispatch(gather(Number(gathering)));
        break;
      case "Sell":
        dispatch(sell(Number(selling)));
        break;
      case "Repair":
        dispatch(repair(Number(repairing)));
        break;
      case "Buy":
        dispatch(buy(Number(buying)));
        break;
      case "Rest":
        dispatch(rest(Number(resting)));
        break;
      case "Steal":
        dispatch(steal(Number(stealing)));
        break;
      default:
        console.log(`${name} is not a switch variable`);
        break;
    }
  }

  function onHandleChange(
    e: React.ChangeEvent<HTMLInputElement>,
    name: string
  ) {
    switch (name) {
      case "Travel":
        setTraveling(Number(e.target.value));
        break;
      case "Gather":
        setGathering(Number(e.target.value));
        break;
      case "Sell":
        setSelling(Number(e.target.value));
        break;
      case "Repair":
        setRepairing(Number(e.target.value));
        break;
      case "Buy":
        setBuying(Number(e.target.value));
        break;
      case "Rest":
        setResting(Number(e.target.value));
        break;
      case "Steal":
        setStealing(Number(e.target.value));
        break;

      default:
        console.log(`${name} is not a switch variable`);
        break;
    }
  }

  return (
    <div className="flex flex-col ">
      <button
        type="button"
        className={` ${gameAction.backgroundColor} rounded-lg border-2 shadow-sm w-20 text-lg md:hover:bg-orange-500 active:opacity-5`}
        onClick={() => onHandleClick(gameAction.name)}
      >
        {gameAction.name}
      </button>
      <input
        placeholder="0"
        title="Travel"
        type="number"
        onChange={(e) => onHandleChange(e, gameAction.name)}
        onKeyDown={(e) =>
          e.key === "Enter" ? onHandleClick(gameAction.name) : ""
        }
        className="bg-blue-600 placeholder:text-slate-300 text-white text-center w-20 rounded-lg border-2 shadow-sm mt-3"
      />
    </div>
  );
}

export const ResetButton = () => {
  const dispatch = useDispatch();

  function handleReset() {
    dispatch(reset());
  }

  return (
    <>
      <button
        type="button"
        title="reset button"
        className="rounded-lg border-2 shadow-sm w-40 h-10 md:hover:to-orange-500 text-lg bg-gradient-to-r from-green-100 to-green-700 relative md:top-[-7rem] active:opacity-5"
        onClick={() => handleReset()}
      >
        Reset
      </button>
    </>
  );
};
