import React, {Component} from 'react'

class Contact extends Component {
    render() {
        return (
            <div className="Contact">
                <form>
                    <div>
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" name='firstName'/>
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" name='lastName'/>
                    </div>

                    <div>
                        
                    </div>
                </form>
            </div>
        )
    }
}

export default Contact