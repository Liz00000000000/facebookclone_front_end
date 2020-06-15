import React, { Component } from 'react'
import Reply from './Reply'


export class Comment extends Component {
    state = {
        inputVisible: false,
        newReplyInput: ''
    }

    handleOnChange = event => this.setState({ [event.target.name]: event.target.value })

    handleClick = () => this.setState({ inputVisible: !this.state.inputVisible })


    theseReplies = this.props.replies.filter(reply => reply.comment_id === this.props.id)
    user = this.props.users.find(user => user.id === this.props.user_id)
    render() {
        return (
            <div className='comment'>
                <span className='commenter-name'>
                  {this.user.first_name} {this.user.last_name}
                </span>
                <p>{this.props.content}</p>
                <button className='add-reply' onClick={this.handleClick}>{this.state.inputVisible ? 'Submit Reply' : 'Add Reply'}</button>
                {this.state.inputVisible ? <input onChange={this.handleOnChange} name='newReplyInput' placeholder='Comment...' value={this.state.newCommentInput}></input> : null }
               {this.theseReplies.map(rep => <Reply users={this.props.users} key={rep.id} {...rep} /> )}
            </div>
        )
    }
}

export default Comment
