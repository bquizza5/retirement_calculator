import React, { useState } from 'react';

function Planner() {

    const [values, setValues] = useState({})
    const [results, setResults] = useState()

    const changeHandler = (value) => {
        console.log(values)
        setValues({ ...values, [value.target.name]: value.target.value })
    }

    const retirementBalance = (allowance, rate, years, inflation) => {

        let balance =((allowance*12)/(rate/100))*(Math.pow((inflation/100 + 1), years))
        setResults(balance.toFixed(2))

    }
    


    const submitHandler = (n) => {
        n.preventDefault()
        retirementBalance(parseFloat(values.allowance), parseFloat(values.rate), parseFloat(values.years), parseFloat(values.inflation))
        
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