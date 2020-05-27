import React, {useState} from 'react';




const Slide = (props) => {


    const changeHandler =(e) => {
        props.setter(e.target.value)
    }

    const submitHandler = () => {
        if(props.value) {
            props.next()
    }
}

    return (
        <div className='plannerSlide'>
            <p>{props.question}</p>
            <input onChange={changeHandler} value={props.value} />
            <button onClick={submitHandler}>next</button>
            <p>{props.slide}</p>
        </div>
    )
}

export default Slide;