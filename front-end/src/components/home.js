import React from 'react';


const Home = (props) => {


    return (
        <div>
            <button onClick={() => { props.setTab('calc') }}>calculator</button>
            <button onClick={() => { props.setTab('plan') }}>planner</button>
            <p>this is the home page</p>
        </div>
    )
}
export default Home;