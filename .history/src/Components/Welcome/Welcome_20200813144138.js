import React from 'react'

function Welcome(props){
    return(
        <div className='Welcome'>
            Welcome, {props.match.params.any} || {props.className} !
        </div>
    )
}

export default Welcome