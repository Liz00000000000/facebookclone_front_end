import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class LoginForm extends Component {

    // state = {
    //     email: '',
    //     password: ''
    // }

    // handleChange = e => {
    //     this.setState({
    //         [e.target.name]: e.target.value
    //     })
    // }

    // handleSubmit = e => {
    //     e.preventDefault()
    //     console.log(this.state)
    // }

    render() {
        
        return (
            <div className='con-inner-container'>
                <form onSubmit={this.props.handleSubmit} >
                    <h1>Sign In</h1>
                    <input className="email" type="text" name="email" placeholder="email" value={this.props.email} onChange={this.props.handleChange} />

                    <input className="password" type="password" name="password" placeholder="password" value={this.props.password} onChange={this.props.handleChange} />
                        <input type="submit"/>
                </form>
            </div>
        )
    }
}

export default LoginForm