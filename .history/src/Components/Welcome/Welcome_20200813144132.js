import React from 'react'

function Welcome(props){
    return(
        <div className='Welcome'>
            Welcome, {props.match.params.any} || {props.} !
        </div>
    )
}

export default Welcome