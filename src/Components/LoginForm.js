import React, { Component } from 'react'

class LoginForm extends Component {

    state = {
        email: '',
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
                    <h1>Sign In</h1>
                    <input className="email" type="text" name="email" placeholder="email" value={this.state.email} onChange={this.handleChange} />

                    <input className="password" type="password" name="password" placeholder="password" value={this.state.password} onChange={this.handleChange} />
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

export default LoginForm