import { useSelector, useDispatch } from "react-redux";
import {
  travel,
  gather,
  repair,
  sell,
  buy,
  rest,
  steal,
} from "./travelerSlice";
import { useState } from "react";
import { RootTravelerState } from "../types/traveler";

const Traveler = () => {
  const [traveling, setTraveling] = useState(0);
  const [gathering, setGathering] = useState(0);
  const [repairing, setRepairing] = useState(0);
  const [selling, setSelling] = useState(0);
  const [buying, setBuying] = useState(0);
  const [resting, setResting] = useState(0);
  const [stealing, setStealing] = useState(0);

  const dispatch = useDispatch();

  const suppliesNumber = useSelector(
    (state: RootTravelerState) => state.traveler.supplies
  );
  const cashAmount = useSelector(
    (state: RootTravelerState) => state.traveler.cash
  );
  const numberOfDays = useSelector(
    (state: RootTravelerState) => state.traveler.days
  );
  const fatigueLevels = useSelector(
    (state: RootTravelerState) => state.traveler.fatigue
  );
  const reputationLevels = useSelector(
    (state: RootTravelerState) => state.traveler.reputation
  );
  const levelOfDisrepair = useSelector(
    (state: RootTravelerState) => state.traveler.disrepair
  );
  const cashNote = useSelector(
    (state: RootTravelerState) => state.traveler.cashWarning
  );
  const suppliesNote = useSelector(
    (state: RootTravelerState) => state.traveler.suppliesWarning
  );
  const fatigueNote = useSelector(
    (state: RootTravelerState) => state.traveler.fatigueWarning
  );
  const reputationNote = useSelector(
    (state: RootTravelerState) => state.traveler.reputationWarning
  );
  const repairNote = useSelector(
    (state: RootTravelerState) => state.traveler.repairWarning
  );

  const buttonNames = [
    "Travel",
    "Gather",
    "Sell",
    "Repair",
    "Buy",
    "Rest",
    "Steal",
  ];

  const warnings = [
    cashNote,
    suppliesNote,
    fatigueNote,
    reputationNote,
    repairNote,
  ];

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

  return (
    <section>
      <div className="flex justify-evenly mt-5">
        {buttonNames.map((name, idx) => {
          let background;
          switch (name) {
            case "Travel":
              background = "bg-green-100";
              break;
            case "Gather":
              background = "bg-green-200";
              break;
            case "Sell":
              background = "bg-green-300";
              break;
            case "Repair":
              background = "bg-green-400";
              break;
            case "Buy":
              background = "bg-green-500";
              break;
            case "Rest":
              background = "bg-green-600";
              break;
            case "Steal":
              background = "bg-green-700";
              break;
            default:
              console.log(`${name} not a valid color`);
              break;
          }
          return (
            <div className="flex flex-col " key={idx + name}>
              <button
                type="button"
                className={` ${background} rounded-lg border-2 shadow-sm w-20 text-lg hover:bg-orange-500`}
                onClick={() => onHandleClick(name)}
              >
                {name}
              </button>
              <input
                placeholder="0"
                title="Travel"
                type="number"
                onChange={(e) => onHandleChange(e, name)}
                className="bg-blue-600 placeholder:text-slate-300 text-white text-center w-20 rounded-lg border-2 shadow-sm mt-3"
              />
            </div>
          );
        })}
      </div>
      <div className="mt-6">
        <div className="flex justify-center grid-rows-1 grid-cols-7 gap-4">
          {warnings.map((warn, idx) => {
            let textColor;
            warn == "Invalid Amount"
              ? (textColor = "text-red-500 animate-bounce")
              : "";
            warn == "Sorry not enough cash for transaction"
              ? (textColor = "text-red-500 animate-bounce")
              : "";
            warn == "Invalid Days"
              ? (textColor = "text-red-500 animate-bounce")
              : "";
            warn == "Warning meduim tiredness"
              ? (textColor = "text-yellow-500 animate-bounce")
              : "";
            warn == "Unable to continue gathering"
              ? (textColor = "text-red-500 animate-bounce")
              : "";
            warn === "Exceeded maximum number of gathering days"
              ? (textColor = "text-red-500 animate-bounce")
              : "";
            warn === "Exceeded maximum number of supplies"
              ? (textColor = "text-red-500 animate-bounce")
              : "";
            return (
              <div
                className={`border ${textColor} border-black h-20 w-1/6 flex text-center justify-center items-center rounded-lg`}
                key={idx + warn}
              >
                {warn}
              </div>
            );
          })}
        </div>
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
              <td>{cashAmount}</td>
              <td>{suppliesNumber}</td>
              <td>{fatigueLevels}</td>
              <td>{reputationLevels}</td>
              <td>{levelOfDisrepair}</td>
              <td>{numberOfDays}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Traveler;
