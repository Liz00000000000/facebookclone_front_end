import React, { Component } from 'react'
import Comment from './Comment'

const url = 'http://localhost:3000/comments'

export class Post extends Component {
    state = {
        inputVisible: false,
        newCommentInput: ''
    } 
    // likesArray = this.props.likes.filter(like => like.post_id === this.props.id )
    // likes = this.likesArray.length + ' Likes <3'
    // user = this.props.users.find(user => user.id === this.props.user_id )


    handleOnChange = event => this.setState({ [event.target.name]: event.target.value })

    handleClick = () => {
        this.setState({ inputVisible: !this.state.inputVisible })
        if (this.state.newCommentInput !== ''){
            const newCom = this.state.newCommentInput
            const postId = this.props.id 
            fetch(url, {
                method: 'POST', 
                headers: {
                    'Content-type': 'application/json',
                    Accept: 'application/json'
                }, 
                body: JSON.stringify({ content: newCom, post_id: postId, user_id: 141 })
            }).then(res => res.json()).then(com => console.log(com))
            this.setState({
                newCommentInput: ''
            })
        }
    }

  
    
    render () {
        const userid = this.props.user_id
        const postWritter = this.props.users.find(user => user.id === userid)
        const thisID = this.props.id 
        const commentsArray = this.props.commentsFromState.filter(comment => comment.post_id == thisID)

        return (
            <div className='post'>
                <div className='user-container'>
                    <img src={postWritter.picture} alt={postWritter.first_name}/>
                    <span className='post-user-name'>{postWritter.first_name} {postWritter.last_name}</span>
                    <span className='post-date'> {this.props.date}</span>
                </div>
                <p>{this.props.caption}</p>
                <div className='post-interaction-container'>
                    <div className='btns-container'> 
                    <button className='add-like'> <i className='fad fa-heart'/>Like</button>
                 <button className='add-comment' onClick={this.handleClick} > {this.state.inputVisible ? 'Submit Comment' : 'Add Comment'}</button>
                    </div>
                    {commentsArray.map(comment => <Comment users={this.props.users} key={comment.id} {...comment} />) }
                    {/* <div className='likes-container'>
                        <span className='like-count'>{this.likesArray ? this.likes : null }</span>
                    </div> */}
                </div>
                <div className='comment-container'>
                {this.state.inputVisible ? <input onChange={this.handleOnChange} name='newCommentInput' placeholder='Comment...' value={this.state.newCommentInput}></input> : null }
                </div>
            </div>
        )
       }
}

export default Post