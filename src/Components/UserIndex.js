import React, { Component } from 'react'
import UserCard from './UserCard'

export default class UserIndex extends Component {

    render() {
        // console.log(this.props)
        return (
            <div className="userContainer">
              {this.props.users.map(user => <UserCard key={user.id} {...user}/>)}
            </div>
        )
    }
}