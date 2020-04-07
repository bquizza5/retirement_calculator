

export const updatePV = (pv) => dispatch => {
    console.log("pv action", pv)
    return dispatch({type: 'UPDATE_PV', payload: pv})
}

export const updateI = (i) => dispatch => {
    return dispatch({type: 'UPDATE_I', payload: i})
}

export const updatePMT = (pmt) => dispatch => {
    return dispatch({type: 'UPDATE_PMT', payload: pmt})
}

export const updateN = (n) => dispatch => {
    return dispatch({type: 'UPDATE_N', payload: n})
}

export const updateAll = (newState) => {
    return {type: 'UPDATE_ALL', payload: newState}
}