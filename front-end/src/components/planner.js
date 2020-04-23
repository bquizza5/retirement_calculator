import React from 'react';
import { retirementBalance } from './calculations'
import { connect } from "react-redux";

import { updateYwr, updateInflation, updateAllowance, updateN, updateMagicNum } from '../actions/CalcActions'


function Planner(props) {

    const changeHandler = (e) => {
        switch (e.target.name) {
            case 'allowance':
                return props.updateAllowance(e.target.value);
            case 'ywr': 
                return props.updateYwr(e.target.value);
            case 'inflation': 
                return props.updateInflation(e.target.value);
            case 'years': 
                return props.updateN(e.target.value);
            default:
                console.log('something wrong:', e.target.name);   
        }
    }

    
    const submitHandler = (n) => {
        n.preventDefault()
        props.updateMagicNum(retirementBalance(
            parseFloat(props.state.allowance), 
            parseFloat(props.state.ywr), 
            parseFloat(props.state.n), 
            parseFloat(props.state.inflation)
            )) 
    }


    return (
        <>
            <h2>Retirement Planning</h2>
            <form onSubmit={submitHandler}>
                <input name='allowance' placeholder='Desired Monthly Allowance' onChange={changeHandler} value={props.state.allowance} />
                <input name='ywr' placeholder='Yearly Withdrawal Rate' onChange={changeHandler} value={props.state.ywr} />
                <input name='years' placeholder='Number of Years' onChange={changeHandler} value={props.state.n} />
                <input name='inflation' placeholder='Expected Average Inflation Rate' onChange={changeHandler} value={props.state.inflation} />
                <button>calculate</button>
            </form>
            <div>
                {props.state.magicNum > 0 ? <p>you will need ${props.state.magicNum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} to retire.</p>: <></>}
            </div>
        </>
    );
}

const mapPropsToState = state => {
    return {state: state};
};

export default connect(
    mapPropsToState,
    {   updateYwr, 
        updateInflation, 
        updateAllowance,
        updateN,
        updateMagicNum
    })(Planner);