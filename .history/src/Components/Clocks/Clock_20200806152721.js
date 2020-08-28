import React, {Component} from 'react';

class Clock extends Component {
    constructor(props) {
        super(props)

        this.state = {
            date: new Date()
        }
    }

    comp

    tick() {
        this.setState({
            date: new Date()
        })
    }
    render() {
        return(
            <div className='Clock'>
                <h2>It is {this.state.date.toLocaleTimeString()}</h2>
            </div>
        )
    }
}

export default Clock;