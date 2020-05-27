import React, { useState } from 'react';
import { retirementBalance, pmtCalc } from './calculations'
import { connect } from "react-redux";

import { updateYwr, updateInflation, updateAllowance, updateN, updateMagicNum, updatePV, updateI } from '../actions/CalcActions'
import SlideShow from './slideShow';


function Planner(props) {

    const [pmt, setPmt] = useState()

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
            case 'pv':
                return props.updatePV(e.target.value);
            case 'i':
                return props.updateI(e.target.value);
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
    const getPmt = () => {
        setPmt(pmtCalc(props.state.pv, props.state.magicNum, props.state.i, props.state.n))
    }

    return (
        <>
            <SlideShow />
    
            <h2>Retirement Planning</h2>
            
            {
                props.state.magicNum !== 0 ?
            <div>
            <p>for you to retire with ${props.state.allowance} a month </p>
            <p>in {props.state.n} years</p>
            <p>with an average inflation rate of %{props.state.inflation}</p>
            <p>and a yearly withdrawal rate of %{props.state.ywr}</p> 
            <p>you will need <span className="emphasize">${props.state.magicNum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}.</span></p> 
            </div>
            :
                null
            }
            

            {/* <form onSubmit={submitHandler}>
                <input name='allowance' placeholder='Desired Monthly Allowance' onChange={changeHandler} value={props.state.allowance} />
                <input name='ywr' placeholder='Yearly Withdrawal Rate' onChange={changeHandler} value={props.state.ywr} />
                <input name='years' placeholder='Number of Years' onChange={changeHandler} value={props.state.n} />
                <input name='inflation' placeholder='Expected Average Inflation Rate' onChange={changeHandler} value={props.state.inflation} />
                <button>calculate</button>
            </form>
            <div>
                {props.state.magicNum > 0 ? <p>you will need ${props.state.magicNum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} to retire.</p> : <></>}
            </div> */}
            <div>
                {
                props.state.magicNum > 0 ?
                    <div>
                        <p>How much do I need to contribute monthly to reach this goal?</p>
                        <div><label>how much you have saved now: </label><input name='pv' placeholder='How much you have now' onChange={changeHandler} value={props.state.pv} /></div>
                        <div><label>expected average rate of return: </label><input name='i' placeholder='Average Yearly Rate(%)' onChange={changeHandler} value={props.state.i} /></div>
                        <button onClick={getPmt}>get monthly contribution</button>
                    </div>
                    : null
                }
            </div>

            {pmt ? <p>To retire in {props.state.n} years, you need to contribute ${pmt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} monthly.</p> : null}
        </>
    );
}

const mapPropsToState = state => {
    return { state: state };
};

export default connect(
    mapPropsToState,
    {
        updateYwr,
        updateInflation,
        updateAllowance,
        updateN,
        updateMagicNum,
        updatePV,
        updateI
    })(Planner);