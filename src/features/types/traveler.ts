interface TravelerSate {
    cash: number,
    days: number,
    supplies: number,
    fatigue: number,
    disrepair: number,
    reputation: number,
    cashWarning: string,
    suppliesWarning: string,
    fatigueWarning: string,
    reputationWarning: string,
    repairWarning: string,
}

export type RootTravelerState = {
    traveler: TravelerSate
}