import React, {Component} from 'react'

class Contact extends Component {
    constructor(props) {
        super(props)

        this.state = {
            submitted: false,
            formData: {
                firstName: '',
                lastName: '',
            }
        }
    }

    handleChange = (event) => {
        const formDate = {...this.state.formData};
        formData[event.target.name] = event.target.value;

        this.setState({formData})
    }
    render() {
        return (
            <div className="Contact">
                <form>
                    <div>
                        <label htmlFor="firstName">First Name</label>
                        <input 
                        type="text" 
                        name='firstName' 
                        value={this.state.formData.firstName} 
                        onChange={this.handleChange}
                       />
                    </div>

                    <div>
                        <label htmlFor="lastName">Last Name</label>
                        <input 
                        type="text" 
                        name='lastName' 
                        value={this.state.formData.lastName} 
                        onChange={this.}
                        />
                    </div>

                    <button>Submit Form</button>
                </form>
            </div>
        )
    }
}

export default Contact