import React from 'react';




const Slide = (props) => {


    const changeHandler = (e) => {
        props.setter(e.target.value)
    }

    const submitHandler = () => {
        if (props.value) {
            props.next()
        }
    }

    return (
        <div className='plannerSlide'>

            <p>{props.question}</p>
            <input onChange={changeHandler} value={props.value} />

            
            <div className='slideNav'>
                <p className="navButton" onClick={props.prev}>◀</p>
                <p>{props.slide}</p>
                <p className="navButton" onClick={submitHandler}>▶</p>
            </div>
        </div>
    )
}

export default Slide;