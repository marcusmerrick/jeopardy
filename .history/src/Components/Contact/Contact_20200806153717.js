import React, {Component} from 'react'

class Contact extends Component {
    render() {
        return (
            <div className="Contact">
                <form action="">
                    <div>
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" name='firstName'/>
                    </div>
                </form>
            </div>
        )
    }
}

export default Contact