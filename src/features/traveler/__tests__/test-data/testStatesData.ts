export const initialState = {
    cash: 100,
    days: 0,
    supplies: 0,
    fatigue: 0,
    disrepair: 0,
    reputation: 100,
    distance:0
}

export const zeroReputationState = {
    cash: 100,
    days: 0,
    supplies: 0,
    fatigue: 0,
    disrepair: 0,
    reputation: 0,
    distance: 0
}
export const negativeReputationState = {
    cash: 100,
    days: 0,
    supplies: 0,
    fatigue: 0,
    disrepair: 0,
    reputation: -1,
    distance: 0
}
export const fatiguedState = {
    cash: 100,
    days: 0,
    supplies: 8,
    fatigue: 99,
    disrepair: 8,
    reputation: 100,
    distance: 0
}

export const restedState = {
    cash: 100,
    days: 0,
    supplies: 4,
    fatigue: 0,
    disrepair: 0,
    reputation: 100,
    distance: 0
}

export const suppliesState = {
    cash: 100,
    days: 1,
    supplies: 8,
    fatigue: 3,
    disrepair: 8,
    reputation: 100,
    distance: 0
}

export const disrepairState = {
    cash: 100,
    days: 0,
    supplies: 6,
    fatigue: 0,
    disrepair: 100,
    reputation: 100,
    distance: 0
}

export const repairedState = {
    cash: 100,
    days: 0,
    supplies: 8,
    fatigue: 0,
    disrepair: 0,
    reputation: 100,
    distance: 0
}