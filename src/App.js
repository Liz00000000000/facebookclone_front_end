import React, { Component } from 'react';
import './App.css';
import Nav from './Components/Nav'
import UserIndex from './Components/UserIndex';
import { Route, Switch } from 'react-router-dom';
import Landing from './Components/Landing';
import User from './Components/User';
import Post from './Components/Post'
import LoginForm from './Components/LoginForm'
import SignupForm from './Components/SignupForm'


class App extends Component {

  state = {
    users: [],
    posts: [],
    likes: [],
    comments: [],
    friends: [],
    replies: [],
    search: '',
    indivUser: {},
    newPost: ''
    // seePostsOnly: true
  }

  componentDidMount(){
    fetch('http://localhost:3000/users').then(res => res.json()).then(users => this.setState({ users }))
    fetch('http://localhost:3000/posts').then(res => res.json()).then(posts => this.setState({ posts }))
    fetch('http://localhost:3000/likes').then(res => res.json()).then(likes => this.setState({ likes }))
    fetch('http://localhost:3000/friends').then(res => res.json()).then(friends => this.setState({ friends }))
    fetch('http://localhost:3000/comments').then(res => res.json()).then(comments => this.setState({ comments }))
    fetch('http://localhost:3000/replies').then(res => res.json()).then(replies => this.setState({ replies }))
}

currentUser = (id) => {
  console.log(id)
  const indivUserObj = this.state.users.find(user => user.id === id)
  this.setState({
    indivUser: indivUserObj
  })
}

handleNewComment = (newCom) => {
  this.setState({ comments: [...this.state.comments, newCom] }) 
}

handleLike = (postID) => {
  fetch('http://localhost:3000/likes', {
    method: 'POST', 
    headers: {
      'content-type': 'application/json',
      accept: 'application/json'
    },
    body: JSON.stringify({ post_id: postID, user_id: 144})
  }).then(res => res.json()).then(res => this.setState({ likes: [...this.state.likes, res] }))
}


deletePost = (id) => {
  const postID = id
  fetch('http://localhost:3000/posts/' + postID, {
   method: 'DELETE', 
   headers: {
     "content-type": 'application/json',
     accept: 'application/json'
   }
 })
}


handleSubmitNewPost = (id) => {
  const content = this.state.newPost
  console.log(content)
  fetch('http://localhost:3000/posts', {
    method: 'POST', 
    headers: {
      "content-type": 'application/json',
      accept: 'application/json'
    },
    body: JSON.stringify({ user_id: id, caption: content })
  }).then(res => res.json()).then(posts => this.setState({ posts: [...this.state.posts, posts], newPost: '' }))
}



handleOnchange = (event) => {
  this.setState({ [event.target.name]: event.target.value })
}

  render() {
    
    return (
      <div className="App">
        <Nav />
        {/* <UsersHome/> */}
        <Switch>
          {/* <Route path="/users/:id" component={User} /> */}
          <Route path='/posts' render={() => this.state.posts.map(post => <Post likes={this.state.likes} handleLike={this.handleLike} handleNewComment={this.handleNewComment} key={post.id} commentsFromState={this.state.comments} {...post} users={this.state.users} />) } />
          <Route path="/users/:id" render={() => <User likes={this.state.likes} posts={this.state.posts} handleOnchange={this.handleOnchange} handleSubmitNewPost={this.handleSubmitNewPost} newPost={this.state.newPost} deletePost={this.deletePost} user={this.state.indivUser} />} />
          <Route path="/users" render={() => <UserIndex currentUserFunc={this.currentUser} users={this.state.users} />} />
          <Route path="/login" component={LoginForm} />
          <Route path="/signup" component={SignupForm} />
          <Route path="/" component={Landing} />
        </Switch>
      </div>
    );
  }
}

{/* <Route path="/help" render={() => <Help exampleCustomProp={false} />} /> */}

export default App;
