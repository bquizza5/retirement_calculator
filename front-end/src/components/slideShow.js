import React, { useState } from 'react';
import PlannerSlide from './plannerSlide';
import { connect } from "react-redux";
import {retirementBalance} from "./calculations";

import { updateYwr, updateInflation, updateAllowance, updateN, updateMagicNum, updatePV, updateI } from '../actions/CalcActions'



const SlideShow = (props) => {
    const [currentSlide, setCurrentSlide] = useState(1)
    const data = [
        { question: "If you were to retire today, how much money would you need per month?", setter: (e) => { props.updateAllowance(e) }, value: props.state.allowance, slideNumber: 1 },
        { question: "What percent of your retirement balance will you withdraw yearly? (this should be less than your average expected return or you will run out of money)", setter: (e) => { props.updateYwr(e) }, value: props.state.ywr, slideNumber: 2 },
        { question: "In how many years do you plan to retire?", setter: (e) => { props.updateN(e) }, value: props.state.n, slideNumber: 3 },
        { question: "What will the average inflation rate be? (historically is been about 3%)", setter: (e) => { props.updateInflation(e) }, value: props.state.inflation, slideNumber: 4 },
    ]

    const getMagicNum = () => {
        props.updateMagicNum(retirementBalance(
            parseFloat(props.state.allowance),
            parseFloat(props.state.ywr),
            parseFloat(props.state.n),
            parseFloat(props.state.inflation)
        ))
    }

    const nextSlide = () => {
        setCurrentSlide(currentSlide + 1)
    }

    const prevSlide = () => {
        setCurrentSlide(currentSlide - 1)
    }

    const slideIndicator = (num) => {
        let notSelected = '●'
        let selected = '◉'
        let indicator = notSelected.repeat(data.length)
        indicator = indicator.substring(0, num -1) + selected + indicator.substring(num)
        
        return indicator
    }

    return (
        <div>
            {data.map((slide) => {
                if (slide.slideNumber === data.length) {
                    return (<div key={slide.slideNumber}>
                        {
                            currentSlide === slide.slideNumber ?
                                <PlannerSlide  
                                    question={slide.question}
                                    setter={slide.setter}
                                    slide={slideIndicator(slide.slideNumber)}
                                    value={slide.value}
                                    prev={() => prevSlide()}
                                    next={() => {
                                        nextSlide() 
                                        getMagicNum()}} />
                                : null
                        }
                    </div>)
                }
                return (<div key={slide.slideNumber}>
                    {
                        currentSlide === slide.slideNumber ?
                            <PlannerSlide  
                                question={slide.question}
                                setter={slide.setter}
                                value={slide.value}
                                slide={slideIndicator(slide.slideNumber)}
                                prev={() => prevSlide()}
                                next={() => nextSlide()} />
                            : null
                    }
                </div>)

            })}
        </div>
    )
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
    })(SlideShow);

// export default SlideShow;