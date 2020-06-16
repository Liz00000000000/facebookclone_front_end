import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Nav extends Component {

    // fullName = () => {
    //     return `${this.props.first_name} ${this.props.last_name}` 
    // }

    render() {

        return (
            <nav>
                <div className="inner-nav">
                    <div className="logo">
                        <NavLink to="/">So Not Facebook</NavLink>
                    </div>
                    <div className="page-nav-container">
                        <NavLink to="/login">Sign In</NavLink>
                        <NavLink to="/signup">Sign Up</NavLink>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Nav