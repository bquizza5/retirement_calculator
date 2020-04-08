import React from 'react';
import { updateI, updateN, updatePMT, updatePV, updateAll, updateFV } from '../actions/CalcActions'
import { FV } from './calculations'
import { connect } from "react-redux";

const Calculator = (props) => {


    const changeHandler = (e) => {

        switch (e.target.name) {
            case 'pv':
                return props.updatePV(e.target.value);
            case 'pmt': 
                return props.updatePMT(e.target.value);
            case 'i': 
                return props.updateI(e.target.value);
            case 'n': 
                return props.updateN(e.target.value);
            default:
                console.log('something wrong:', e.target.name);
            
        }
    }
    //future value calculation
    const submitHandler = (n) => {
        n.preventDefault()
        props.updateFV(FV(
            parseFloat(props.state.pv),
            parseFloat(props.state.i) / 12,
            parseFloat(props.state.pmt),
            parseFloat(props.state.n) * 12
        ))
    }

    return (
        <>
            <h2>Calculator</h2>
            <form onSubmit={submitHandler}>
                <input name='pv' placeholder='Present Value' onChange={changeHandler} value={props.state.pv} />
                <input name='pmt' placeholder='Monthly Contribution' onChange={changeHandler} value={props.state.pmt} />
                <input name='i' placeholder='Average Yearly Rate(%)' onChange={changeHandler} value={props.state.i} />
                <input name='n' placeholder='Number of Years' onChange={changeHandler} value={props.state.n} />
                <button>calculate</button>
            </form>
            <div>
                {props.state.fv.length > 0 ? <p>${props.state.fv.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p> : <p></p>}
            </div>
        </>
    );
}


//connecting to actons and redux store

const mapPropsToState = state => {
    return {state: state};
};

export default connect(
    mapPropsToState,
    {   updateAll,
        updateFV,
        updatePV,
        updatePMT,
        updateI,
        updateN
    })(Calculator);
