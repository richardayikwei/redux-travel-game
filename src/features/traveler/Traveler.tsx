import { UseDispatch, useSelector } from "react-redux";
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

const Traveler = () => {
  const suppliesNumber = useSelector((state) => state.traveler.supplies);
  const cashAmount = useSelector((state) => state.traveler.cash);
  const numberOfDays = useSelector((state) => state.traveler.days);
  const fatigueLevels = useSelector((state) => state.traveler.fatigue);
  const reputationLevels = useSelector((state) => state.traveler.reputation);
  const levelOfDisrepair = useSelector((state) => state.traveler.disrepair);

  const buttonNames = [
    "Travel",
    "Gather",
    "Repair",
    "Sell",
    "Buy",
    "Rest",
    "Steal",
  ];

  return (
    <section>
      <div className="flex justify-evenly mt-5">
        {buttonNames.map((name, idx) => {
          let background;
          switch (idx) {
            case 0:
              background = "bg-green-100";
              break;
            case 1:
              background = "bg-green-200";
              break;
            case 2:
              background = "bg-green-200";
              break;
            case 3:
              background = "bg-green-300";
              break;
            case 4:
              background = "bg-green-400";
              break;
            case 5:
              background = "bg-green-500";
              break;
            case 6:
              background = "bg-green-500";
              break;
            default:
              break;
          }
          return (
            <div className="flex flex-col ">
              <button
                type="button"
                className={`${background} rounded-lg border-2 shadow-sm w-20 text-lg hover:bg-orange-500`}
                key={idx + name}
              >
                {name}
              </button>
              <input
                title={name}
                type="text"
                className="bg-blue-600 w-20 rounded-lg border-2 shadow-sm mt-3"
              />
            </div>
          );
        })}
      </div>
      <div className="flex justify-center mt-6">
        <table className="border-2 table-auto text-center h-20 divide-y">
          <tr className="divide-x-2 ">
            <th className="p-4">Cash</th>
            <th className="p-4">Supplies</th>
            <th className="p-4">Fatigue</th>
            <th className="p-4">Reputation</th>
            <th className="p-4">Disrepair</th>
            <th className="p-4">Days</th>
          </tr>
          <tr className="divide-x-2">
            <td>{cashAmount}</td>
            <td>{suppliesNumber}</td>
            <td>{fatigueLevels}</td>
            <td>{reputationLevels}</td>
            <td>{levelOfDisrepair}</td>
            <td>{numberOfDays}</td>
          </tr>
        </table>
      </div>
    </section>
  );
};

export default Traveler;
