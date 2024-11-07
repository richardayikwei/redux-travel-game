interface TravelerSate {
  cash: number;
  days: number;
  supplies: number;
  fatigue: number;
  disrepair: number;
  reputation: number;
}

export type RootTravelerState = {
  traveler: TravelerSate;
};
