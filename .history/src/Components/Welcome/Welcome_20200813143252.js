import React from 'react'

function Welcome(props){
    return(
        <div className='Welcome'>
            Welcome, {props.name} !
            || Welcome, {props.match.prams}
        </div>
    )
}

export default Welcome