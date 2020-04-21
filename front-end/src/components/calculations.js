



export const FV = (pv, i, pmt, n) => {
    let fv = pv
    for (let x = 0; x < n; x++) {
        fv = (fv).toFixed(2) * ((1 + (i / 100))) + pmt
    }
    return fv.toFixed(2)
}


//minimum needed to retire -- given monthly allowance
    //allowance = monthly allowance
    //rate = yearly withdrawal rate
    //years = years left until desired retirement date
    //inflation = average inflation
export const retirementBalance = (allowance, rate, years, inflation) => {

    return (((allowance*12)/(rate/100))*(Math.pow((inflation/100 + 1), years))).toFixed(2)
}

//calculate monthly payment needed to hit your retirement balance in n years
export const pmtCalc = (pv, fv, r, n) => {
    pv = parseFloat(pv)
    r = parseFloat(r)
    n = parseFloat(n)

    return ((fv - pv * Math.pow(((1 + (r/100) / 12)), n * 12)) / ((Math.pow(1 + (r/100) / 12, n * 12) - 1) / ((r/100) / 12))).toFixed(2)

}