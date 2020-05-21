import React from 'react'

import blueLogo from '../images/blueLogo.png'
import greenLogo from '../images/greenLogo.png'
import orangeLogo from '../images/orangeLogo.png'



const Header = (props) => {
    
    const setTab= props.setTab
    const tab= props.tab

    return (
        <div className='header'>
            <img onClick={()=>{setTab('home')}} class='headerLogo' src={blueLogo} />
            <div>
                <button className={tab === 'calc' ? 'headerButton selected': 'headerButton'}  onClick={()=>{setTab('calc')}}>calculator</button>
                <button className={tab === 'plan' ? 'headerButton selected': 'headerButton'} onClick={()=>{setTab('plan')}}>planner</button>
            </div>
        </div>
    )
}

export default Header;