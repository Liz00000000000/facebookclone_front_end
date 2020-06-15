import React, { Component } from 'react'
import User from './User'
import Post from './Post'

export class UsersHome extends Component {
    state ={
        users: [],
        posts: [],
        likes: [],
        comments: [],
        friends: [],
        replies: [],
        search: '',
        seePostsOnly: true
    }

    componentDidMount(){
        fetch('http://localhost:3000/users').then(res => res.json()).then(users => this.setState({ users }))
        fetch('http://localhost:3000/posts').then(res => res.json()).then(posts => this.setState({ posts }))
        fetch('http://localhost:3000/likes').then(res => res.json()).then(likes => this.setState({ likes }))
        fetch('http://localhost:3000/friends').then(res => res.json()).then(friends => this.setState({ friends }))
        fetch('http://localhost:3000/comments').then(res => res.json()).then(comments => this.setState({ comments }))
        fetch('http://localhost:3000/replies').then(res => res.json()).then(replies => this.setState({ replies }))
    }

    handleOnchange = () => {
       this.setState({ seePostsOnly: !this.state.seePostsOnly  })
    }

    handleOnSearch = (event) => {
        this.setState({ search: event.target.value })
    }

    render() {
        let users = this.state.users.filter(user => user.first_name.toLowerCase().includes(this.state.search.toLowerCase()) || user.last_name.toLowerCase().includes(this.state.search.toLowerCase()))
        let posts = this.state.posts.filter(posts => posts.caption.toLowerCase().includes(this.state.search.toLowerCase()))
        return (
            <div>
            <input onChange={this.handleOnSearch} value={this.state.search} placeholder='Searching...'></input>
            <select onChange={this.handleOnchange}>
                <option name='seePostsOnly'>See All Posts</option>
                <option name='seePostsOnly'>See All Users</option>
            </select>
                {this.state.seePostsOnly ? posts.map(post => <Post inputField={this.state.inputField}  commentAdd={this.commentAdd} users={this.state.users} comments={this.state.comments} replies={this.state.replies} key={post.id} {...post} likes={this.state.likes} />) : users.map(user => <User key={user.id} {...user} likes={this.state.likes} friends={this.state.friends} />) }
            </div>
        )
    }
}

export default UsersHome
