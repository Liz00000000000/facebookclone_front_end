import React, { Component } from 'react'
import UserCard from './UserCard'

export default class UserIndex extends Component {

    render() {

        return (
            <div className="userContainer">
              {this.props.users.map(user => <UserCard loggedIn={this.props.loggedIn} currentUserFunc={this.props.currentUserFunc} key={user.id} {...user}/>)}
            </div>
        )
    }
}