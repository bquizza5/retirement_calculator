

export const updatePV = (pv) => {
    return {type: 'UPDATE_PV', payload: pv}
}

export const updateI = (i) => {
    return {type: 'UPDATE_I', payload: i}
}

export const updatePMT = (pmt) => {
    return {type: 'UPDATE_PMT', payload: pmt}
}

export const updateN = (n) => {
    return {type: 'UPDATE_N', payload: n}
}

export const updateAll = (newState) => {
    return {type: 'UPDATE_ALL', payload: newState}
}

export const updateFV = (fv) => {
    return {type: 'UPDATE_FV', payload: fv}
}