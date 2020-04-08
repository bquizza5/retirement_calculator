


const initialState = {
    pv: '',
    i: '',
    pmt: '',
    n: '',
    fv: ''
}

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_PV': 
            return {
                ...state,
                pv: "$" + action.payload,
                fv: ''
            }
        case 'UPDATE_I': 
            return {
                ...state,
                i: action.payload,
                fv: ''
            }
        case 'UPDATE_PMT': 
            return {
                ...state,
                pmt: action.payload,
                fv: ''
            }
        case 'UPDATE_N':
            return {
                ...state,
                n: action.payload,
                fv: ''
            }
        case 'UPDATE_FV':
            return {
                ...state,
                fv: action.payload
            }
        case 'UPDATE_ALL':
            return action.payload
            
        default:
            return state
    }

}

export default Reducer;