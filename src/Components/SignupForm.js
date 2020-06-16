import React, { Component } from 'react'

export default class SignupForm extends Component {

    state = {
        first_name: '',
        last_name: '',
        email: '',
        age: '',
        location: '',
        occupation: '',
        college: '',
        picture: '',
        bio: '',
        password: ''
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        console.log(this.state)
    }

    render() {
        
        return (
            <div className='con-inner-container'>
                <form onSubmit={this.handleSubmit} >
                    <h1>Sign Up</h1>

                    <input className="name" type="text" placeholder="First Name" name="first_name" onChange={this.handleChange} />

                    <input className="name" type="text" placeholder="Last Name" name="last_name" onChange={this.handleChange} />

                    <input className="email" type="text" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange} />

                    <input className="age" type="text" name="age" placeholder="Your age" value={this.state.age} onChange={this.handleChange} />

                    <input className="location" type="text" name="location" placeholder="Your city" value={this.state.location} onChange={this.handleChange} />

                    <input className="occupation" type="text" name="occupation" placeholder="Your job" value={this.state.occupation} onChange={this.handleChange} />

                    <input className="college" type="text" name="college" placeholder="Your college" value={this.state.college} onChange={this.handleChange} />

                    <input className="picture" type="text" name="picture" placeholder="Your picture URL" value={this.state.picture} onChange={this.handleChange} />

                    <input className="bio" type="text" name="bio" placeholder="Your bio" value={this.state.bio} onChange={this.handleChange} />

                    <input className="password" type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} />

                    <input type="submit"/>
                </form>
            </div>
        )
    }
}