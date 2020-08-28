import React from 'react'

function Welcome(props){
    return(
        <div className='Welcome'>
            Welcome, {props.name} || {props.match.prams.name} !
        </div>
    )
}

export default Welcome