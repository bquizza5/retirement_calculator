import React, { useState } from 'react';

function Calculator() {

    const [values, setValues] = useState({})
    const [results, setResults] = useState()

    const changeHandler = (value) => {
        console.log(values)
        setValues({ ...values, [value.target.name]: value.target.value })
    }

    const FV = (pv, i, pmt, n) => {
        let fv = pv
        for (let x = 0; x < n; x++) {
            fv = (fv).toFixed(2)*((1+(i/100))) + pmt
        }
        setResults(fv.toFixed(2))
    }

    const submitHandler = (n) => {
        n.preventDefault()
        FV(parseFloat(values.pv), parseFloat(values.i)/12, parseFloat(values.pmt), parseFloat(values.n)*12,)
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
                {results ? <p>${results.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>: <div></div>}
            </div>
        </>
    );
}

export default Calculator;