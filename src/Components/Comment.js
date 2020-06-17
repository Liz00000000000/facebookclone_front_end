import React, { Component } from 'react'
import Reply from './Reply'


class Comment extends Component {
    state = {
        inputVisible: false,
        newReplyInput: ''
    }

    handleOnChange = event => this.setState({ [event.target.name]: event.target.value })

    handleClick = () => this.setState({ inputVisible: !this.state.inputVisible })

    handleDelete = (e) => {
        const id = this.props.id 
        fetch('http://localhost:3000/comments/' + id, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                accept: 'application/json'
            }
        })
        e.target.parentNode.parentNode.remove()
    }


    render() {
        let commentWriter = this.props.users.find(user => user.id === this.props.user_id )
        // console.log(this.props)
        return (
            <div className='comment'>
                <span className='commenter-name'>
                    <img src={commentWriter.picture} alt={this.first_name}/>
                  {commentWriter.first_name} {commentWriter.last_name}
                </span>
                <p>{this.props.content}</p>
                <div className="btn-container">
                {this.props.currentUser.id === commentWriter.id ? <button onClick={this.handleDelete}>Delete Comment</button> : null }
                {/* <button className='add-reply' onClick={this.handleClick}>{this.state.inputVisible ? 'Submit Reply' : 'Add Reply'}</button> 
                {this.state.inputVisible ? <input onChange={this.handleOnChange} name='newReplyInput' placeholder='Comment...' value={this.state.newCommentInput}></input> : null } */}
                </div>
               {/* {this.props.replies.map(rep => <Reply users={this.props.users} key={rep.id} {...rep} /> )} */}
            </div>
        )
    }
}

export default Comment
