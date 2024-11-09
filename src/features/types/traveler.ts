interface TravelerSate {
  cash: number;
  days: number;
  supplies: number;
  fatigue: number;
  disrepair: number;
  reputation: number;
  distance: number;
}

export type RootTravelerState = {
  traveler: TravelerSate;
};
