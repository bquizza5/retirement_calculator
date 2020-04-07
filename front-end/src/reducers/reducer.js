


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
        console.log("pv updated:", action.payload)
            return {
                ...state,
                pv: action.payload
            }
        case 'UPDATE_I': 
            return {
                ...state,
                i: action.payload
            }
        case 'UPDATE_PMT': 
            return {
                ...state,
                pmt: action.payload
            }
        case 'UPDATE_N':
            return {
                ...state,
                n: action.payload
            }
        case 'UPDATE_ALL':
            return action.payload
            
        default:
            return state
    }

}

export default Reducer;