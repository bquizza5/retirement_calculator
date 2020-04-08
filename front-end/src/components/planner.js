import React, { useState } from 'react';
import { retirementBalance } from './calculations'

function Planner() {

    const [values, setValues] = useState({})
    const [results, setResults] = useState()

    const changeHandler = (value) => {
        console.log(values)
        setValues({ ...values, [value.target.name]: value.target.value })
    }

    
    const submitHandler = (n) => {
        n.preventDefault()
        setResults(retirementBalance(
            parseFloat(values.allowance), 
            parseFloat(values.rate), 
            parseFloat(values.years), 
            parseFloat(values.inflation)
            ))
        
    }


    return (
        <>
            <h2>Retirement Planning</h2>
            <form onSubmit={submitHandler}>
                <input name='allowance' placeholder='Desired Monthly Allowance' onChange={changeHandler} value={values.allowance} />
                <input name='rate' placeholder='Yearly Withdrawl Rate' onChange={changeHandler} value={values.rate} />
                <input name='years' placeholder='Number of Years' onChange={changeHandler} value={values.years} />
                <input name='inflation' placeholder='Expected Average Inflation Rate' onChange={changeHandler} value={values.inflation} />
                <button>calculate</button>
            </form>
            <div>
                {results ? <p>${results.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>: <div></div>}
            </div>
        </>
    );
}

export default Planner;