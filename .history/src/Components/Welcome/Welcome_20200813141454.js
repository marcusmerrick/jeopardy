import React from 'react'

function Welcome(props){
    return(
        <div className='Welcome'>
            Welcome, {this.props.match.prams.name}!
        </div>
    )
}

export default Welcome