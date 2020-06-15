import React, { Component } from 'react'

export class Form extends Component {
    state = {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        passwordConfirmation: '',
        bio: '',
        picture: '',
        location: '',
        occupation: '',
        age: ''
    }

    handleOnChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = () => {
        if (this.state.password === this.state.passwordConfirmation){ 
        console.log(this.state)
        } else {
            alert('TRY AGAIN')
        }
    }

    handleDelete = () => {
        console.log(this.props.id)
    }


    render() {
        return (
            <div>
                <form onChange={this.handleOnChange} OnSubmit={this.handleSubmit}>
                    <label>First name:</label>
                    <input name='first_name' value={this.state.first_name}></input>
                    <label >Last name:</label>
                    <input name='last_name' value={this.state.last_name}></input>
                    <label >Email Adress:</label>
                    <input name='email' value={this.state.email}></input>
                    <label >Password:</label>
                    <input name='password' value={this.state.password}></input>
                    <label >Password Confirmation:</label>
                    <input name='passwordConfirmation' value={this.state.passwordConfirmations}></input>
                    <label >Bio:</label>
                    <input name='bio' value={this.state.bio}></input>
                    <label >Profile Picture:</label>
                    <input name='picture' value={this.state.picture}></input>
                    <label >City:</label>
                    <input name='location' value={this.state.location}></input>
                    <label >Job:</label>
                    <input name='occupation' value={this.state.occupation}></input>
                    <label >Age:</label>
                    <input name='age' value={this.state.age}></input>
                    <button>Create User</button>
                </form>
                <button onClick={this.handleDelete}>Delete User</button>
            </div>
        )
    }
}

export default Form
