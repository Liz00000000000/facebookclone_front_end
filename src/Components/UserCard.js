import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class extends Component {

    fullName = () => {
        return `${this.props.first_name} ${this.props.last_name}`
    }

    handleClick = () => {
        if (this.props.loggedIn === true){
        this.props.currentUserFunc(this.props.id)
        } else {
            alert('MUST BE LOGGED IN')
        }
    }

    render() {
        const {id, first_name, last_name, picture} = this.props

        return (
            <Link onClick={this.handleClick} to={`/users/${id}`} className="userCard">
            <h2>{first_name} {last_name}</h2>
            <img src={picture} alt={`${this.fullName()}`}/>
            </Link>
        )
    }
}