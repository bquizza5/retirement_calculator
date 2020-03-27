import React, { useState } from 'react';
import PlannerSlide from './plannerSlide'



const SlideShow = () => {
    const [currentSlide, setCurrentSlide] = useState(1)
    data = [
        { question: "If you were to retire today, how much money would you need per month?", setter: '', slideNumber: 1 },
        { question: "If you were to retire today, how much money would you need per month?", setter: '', slideNumber: 2 },
        { question: "If you were to retire today, how much money would you need per month?", setter: '', slideNumber: 3 },
    ]

    const nextSlide = () => {
        setCurrentSlide(currentSlide + 1)
    }
    return (
        <div>
            {data.map((slide) => {
                return (
                    <div>
                        {
                        cuccentSlide === slide.slidenumber ?
                            <PlannerSlide question={slide.question}
                                setter={slide.setter}
                                slide={slide.slideNumber}
                                next={() => nextSlide()} />
                            : null
                        }
                    </div>
                )
            })}
            <PlannerSlide />
            <PlannerSlide />
            <PlannerSlide />
        </div>
    )
}

export default SlideShow;