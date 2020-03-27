import React, {useState} from 'react';




const Slide = (props) => {

    const [state, setState] = useState()

    const changeHandler =(e) => {
        setState(e.target.value)
    }

    const submitHandler = () => {
        if(state) {
            props.setter(state)
            props.next()
        }
    }

    return (
        <div>
            <p>{props.question}</p>
            <input onChange={changeHandler} value={state} />
            <button onClick={() => {submitHandler}}>next</button>
            <p>{props.slide}</p>
        </div>
    )
}

export default Slide;