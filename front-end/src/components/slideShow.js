import React from 'react';
import PlannerSlide from './plannerSlide'



const SlideShow = () => {

    data = [
        {question: "If you were to retire today, how much money would you need per month?", setter: '', slide: 1}
    ]
return (
    <div>
        <PlannerSlide />
        <PlannerSlide />
        <PlannerSlide />
    </div>
)
}

export default SlideShow;