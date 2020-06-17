import React, { Component } from 'react'

export class CommentInProfile extends Component {

 

    render() {
        const commenter = this.props.users.find(user => user.id === this.props.user_id)
        console.log(this.props)
        return (
            <div className="comment">
                <img src={commenter.picture} alt={commenter.first_name} /> 
                {commenter.first_name} {commenter.last_name}
                <div className="comment-content">
                {this.props.content}
                </div>
            </div>
        )
    }
}

export default CommentInProfile
