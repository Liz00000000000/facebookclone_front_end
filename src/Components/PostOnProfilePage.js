import React, { Component } from 'react'
import CommentInProfile from './CommentInProfile'

export class PostOnProfilePage extends Component {
    state = {
        inputVisible: false,
        comment: ''
    }


    // likesArray = this.props.likes.filter(like => like.post_id === this.props.id )
    // likes = this.likesArray.length + ' Likes <3'
    // user = this.props.users.find(user => user.id === this.props.user_id )


    handleOnChange = event => this.setState({ [event.target.name]: event.target.value })

    handleClick = (e) => {
        e.preventDefault()
        if (this.props)
            if (this.state.comment != ''){
                this.props.submitPost(this.state.comment, this.props.id)
            }
            this.setState({ inputVisible: !this.state.inputVisible })
}

    removePost = (event) => {
        this.props.deletePost(this.props.id)
        event.target.parentNode.parentNode.parentNode.remove()
    }

    
    render () {
        let comments = this.props.comments.filter(comment => comment.post_id === this.props.id)
        let user = this.props.users.find(user => user.id === this.props.user_id)
        // console.log(this.props.users)
        return (
            <div className='post'>
                <div className='user-container'>
                    <img src={user.picture} alt={user.first_name}/>
                    <span className='post-user-name'>{user.first_name} {user.last_name}</span>
                    <span className='post-date'> {this.props.date}</span>
                </div>
                <p>{this.props.caption}</p>
                <div className='post-interaction-container'>
                    <div className='btns-container'> 
                    <button className='add-like'> <i className='fad fa-heart'/>Like</button>
                   <button onClick={this.removePost}>Delete Post</button>
                 <button className='add-comment' onClick={this.handleClick} > {this.state.inputVisible ? 'Submit Comment' : 'Add Comment'}</button>
                   {this.state.inputVisible ? <input name='comment' onChange={this.handleOnChange} value={this.state.comment}></input> : null }
                    </div>
                    {comments.map(comment => <CommentInProfile users={this.props.users} key={comment.id} {...comment} />) }
                    {/* <div className='likes-container'>
                        <span className='like-count'>{this.likesArray ? this.likes : null }</span>
                    </div> */}
                </div>
                <div className='comment-container'>
                {/* {this.state.inputVisible ? <input onChange={this.handleOnChange} name='newCommentInput' placeholder='Comment...' value={this.state.newCommentInput}></input> : null } */}
                {/* {this.props.comments ? this.props.comments.map(comment =>  <Comment users={this.props.users} replies={this.props.replies} key={comment.id} {...comment} /> ) : null } */}
                </div>
            </div>
        )
       }
}

export default PostOnProfilePage