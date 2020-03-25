import React, { useState, useEffect } from 'react';
import { updateI, updateN, updatePMT, updatePV, updateAll } from '../actions/CalcActions'
import { connect } from "react-redux";

const Calculator = (props) => {

    // get values from redux store if there are any
    useEffect(() => {
        setValues(props.state)
    },[])

    const [values, setValues] = useState({
        pv: '',
        i: '',
        pmt: '',
        n: '',
        fv: null
    })


    const changeHandler = (value) => {

        setValues({ ...values, [value.target.name]: value.target.value })
    }

    //future value calculation
    const FV = (pv, i, pmt, n) => {
        let fv = pv
        for (let x = 0; x < n; x++) {
            fv = (fv).toFixed(2) * ((1 + (i / 100))) + pmt
        }
        setValues({...values, fv:fv.toFixed(2)})
        //put values in redux store
        props.updateAll({...values, fv:fv.toFixed(2)})
    }

    const submitHandler = (n) => {
        n.preventDefault()
        FV(
            parseFloat(values.pv),
            parseFloat(values.i) / 12,
            parseFloat(values.pmt),
            parseFloat(values.n) * 12
        ) 
    }

    return (
        <>
            <h2>Calculator</h2>
            <form onSubmit={submitHandler}>
                <input name='pv' placeholder='Present Value' onChange={changeHandler} value={values.pv} />
                <input name='pmt' placeholder='Monthly Contribution' onChange={changeHandler} value={values.pmt} />
                <input name='i' placeholder='Average Yearly Rate(%)' onChange={changeHandler} value={values.i} />
                <input name='n' placeholder='Number of Years' onChange={changeHandler} value={values.n} />
                <button>calculate</button>
            </form>
            <div>
                {values.fv ? <p>${values.fv.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p> : <p></p>}
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
        updatePV,
        updatePMT,
        updateI,
        updateN
    })(Calculator);
