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
        <div style={{height: "60%", width: "60%", position: "absolute", top: "10%", left: "20%", backgroundColor: "red", borderRadius: 10, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", }}>
            <p>{props.question}</p>
            <input onChange={changeHandler} value={state} />
            <button onClick={submitHandler}>next</button>
            <p>{props.slide}</p>
        </div>
    )
}

export default Slide;