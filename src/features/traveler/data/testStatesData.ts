export const initialState = {
    cash: 100,
    days: 0,
    supplies: 0,
    fatigue: 0,
    disrepair: 0,
    reputation: 100,
}

export const zeroReputationState = {
    cash: 100,
    days: 0,
    supplies: 0,
    fatigue: 0,
    disrepair: 0,
    reputation: 0,
}
export const negativeReputationState = {
    cash: 100,
    days: 0,
    supplies: 0,
    fatigue: 0,
    disrepair: 0,
    reputation: -1,
}
export const fatiguedState = {
    cash: 100,
    days: 0,
    supplies: 0,
    fatigue: 99,
    disrepair: 0,
    reputation: 100,
}

export const suppliesState = {
    cash: 100,
    days: 0,
    supplies: 1,
    fatigue: 0,
    disrepair: 0,
    reputation: 100,
}