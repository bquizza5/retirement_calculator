import React, { useState } from 'react';
import PlannerSlide from './plannerSlide'
import { connect } from "react-redux";

import { updateYwr, updateInflation, updateAllowance, updateN, updateMagicNum, updatePV, updateI } from '../actions/CalcActions'



const SlideShow = () => {
    const [currentSlide, setCurrentSlide] = useState(1)
    const data = [
        { question: "If you were to retire today, how much money would you need per month?", setter: (e) => { console.log(e) }, slideNumber: 1 },
        { question: "What percent of your retirement balance will you withdraw yearly? (this should be less than your average expected return or you will run out of money)", setter: (e) => { console.log(e) }, slideNumber: 2 },
        { question: "In how many years do you plan to retire?", setter: (e) => { console.log(e) }, slideNumber: 3 },
    ]

    const nextSlide = () => {
        setCurrentSlide(currentSlide + 1)
    }
    return (
        <div>
            <p>hola my friend</p>
            {data.map((slide) => {
                return (<div key={slide.slideNumber}>
                    {
                        currentSlide === slide.slideNumber ?
                            <PlannerSlide  
                                question={slide.question}
                                setter={slide.setter}
                                slide={slide.slideNumber}
                                next={() => nextSlide()} />
                            : null
                    }
                </div>)

            })}
        </div>
    )
}

// const mapPropsToState = state => {
//     return { state: state };
// };

// export default connect(
//     mapPropsToState,
//     {
//         updateYwr,
//         updateInflation,
//         updateAllowance,
//         updateN,
//         updateMagicNum,
//         updatePV,
//         updateI
//     })(SlideShow);

export default SlideShow;