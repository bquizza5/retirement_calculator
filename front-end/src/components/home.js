import React from 'react';


const Home = (props) => {


    return (
        <div>
            <p>this app has 2 tools. the first one is a future value calculator and the second one is a retirement planner.</p>
            <button onClick={() => { props.setTab('calc') }}>calculator</button>
            <button onClick={() => { props.setTab('plan') }}>planner</button>
            
        </div>
    )
}
export default Home;