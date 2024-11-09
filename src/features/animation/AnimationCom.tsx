import { useSelector } from "react-redux";
import { assests } from "../../assets/assests";
import { selectTraveler } from "../traveler/travelerSlice";

const AnimationCom = () => {
  let image;
  let image1;

  const travelerState = useSelector(selectTraveler);

  if (travelerState.reputation <= 0) {
    image = assests.outlaw;
  } else if (travelerState.fatigue >= 100) {
    image = assests.fatigued;
  } else if (travelerState.disrepair >= 100) {
    image = assests.disrepairImage;
  } else if (travelerState.supplies == 0) {
    image = assests.noSuppliesImage;
  } else if (travelerState.supplies > 0) {
    image = assests.supplied;
  }

    if (travelerState.distance > 0) {
        image1 = assests.traveling;
   }
    
  return (
    <div>
      <figure className="flex container mx-auto h-[30rem]">
        <img src={image} alt="" className="h-[30rem] w-[30rem] rounded-2xl" />
        <img src={image1} alt="" className="h-32 rounded-2xl ml-2" />
      </figure>
    </div>
  );
};

export default AnimationCom;
