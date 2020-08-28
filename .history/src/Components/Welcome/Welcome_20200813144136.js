import React from 'react'

function Welcome(props){
    return(
        <div className='Welcome'>
            Welcome, {props.match.params.any} || {props.name} !
        </div>
    )
}

export default Welcome