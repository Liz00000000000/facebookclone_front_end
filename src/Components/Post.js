import React, { Component } from 'react'
import Comment from './Comment'

export class Post extends Component {
    state = {
        inputVisible: false,
        newCommentInput: ''
    }


    likesArray = this.props.likes.filter(like => like.post_id === this.props.id )
    likes = this.likesArray.length + ' Likes <3'
    user = this.props.users.find(user => user.id === this.props.user_id )


    handleOnChange = event => this.setState({ [event.target.name]: event.target.value })

    handleClick = () => this.setState({ inputVisible: !this.state.inputVisible })

       render () {
        return (
            <div className='post'>
                <div className='user-container'>
                    <img src={this.user.picture} alt={this.user.first_name}/>
                    <span className='post-user-name'>{this.user.first_name} {this.user.last_name}</span>
                    <span className='post-date'> {this.props.date}</span>
                </div>
                <p>{this.props.caption}</p>
                <div className='post-interaction-container'>
                    <div className='btns-container'> 
                    <button className='add-like'> <i className='fad fa-heart'/>Like</button>
                 <button className='add-comment' onClick={this.handleClick} > {this.state.inputVisible ? 'Submit Comment' : 'Add Comment'}</button>
                    </div>
                    <div className='likes-container'>
                        <span className='like-count'>{this.likesArray ? this.likes : null }</span>
                    </div>
                </div>
                <div className='comment-container'>
                {this.state.inputVisible ? <input onChange={this.handleOnChange} name='newCommentInput' placeholder='Comment...' value={this.state.newCommentInput}></input> : null }
                {this.props.comments ? this.props.comments.map(comment =>  <Comment users={this.props.users} replies={this.props.replies} key={comment.id} {...comment} /> ) : null }
                </div>
            </div>
        )
       }
}

export default Post