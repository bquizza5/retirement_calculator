import React from 'react';


const Home = (props) => {


    return (
        <div className='home'>
            <h1>Blaine's Calculator</h1>
            <p>this app has 2 tools. the first one is a future value calculator and the second one is a retirement planner.</p>
            
            <div className='homeSections'>
            <div className='homeSection'>
                <h3>Calculator</h3>
                <p>
                    This is a very simple future value calculator. 
                    It takes your present value, monthly payment, 
                    average rate of return, and number of years, 
                    and gives you your future value.
                </p>
                <button onClick={() => { props.setTab('calc') }}>calculator</button>

            </div>


            <div className='homeSection'>
                <h3>Retirement Planner</h3>
                <p>
                    This planner was built to help you estimate how much 
                    you need to retire, and then how much you need to 
                    contribute monthly to retire.
                </p>
                <button onClick={() => { props.setTab('plan') }}>planner</button>

            </div>
            </div>
            
            
            
            
            
            
            
            
        </div>
    )
}
export default Home;