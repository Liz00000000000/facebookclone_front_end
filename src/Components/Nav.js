import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Nav extends Component {

    // fullName = () => {
    //     return `${this.props.first_name} ${this.props.last_name}` 
    // }

    loggedOutNav = () => {
        return <div className="page-nav-container logged-out">
        <NavLink to="/login">Sign In</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
    </div>
    }

    loggedInNav = () => {
        return <div className="page-nav-container logged-in">
            <NavLink to={`users/${this.props.user.id}`}>Profile</NavLink>    
            <NavLink to="/posts">Posts</NavLink>
            <NavLink to="/users">Users</NavLink>
            <NavLink to="/">Log Out</NavLink>
        </div>
    }

    render() {
        // console.log(this.props.currentUser)
        // console.log(this.props.user)
        return (
            <nav>
                <div className="inner-nav">
                    <div className="logo">
                        <NavLink to="/">So Not Facebook</NavLink>
                    </div>
                    {/* {this.loggedInNav()} */}
                    { this.props.loggedIn ? this.loggedInNav() : this.loggedOutNav()}
                </div>
            </nav>
        )
    }
}

export default Nav