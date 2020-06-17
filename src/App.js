import React, { Component } from 'react';
import './App.css';
import Nav from './Components/Nav'
import UserIndex from './Components/UserIndex';
import { Route, Switch, useHistory } from 'react-router-dom';
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
    newPost: '',
    loggedIn: false,
    email: '',
    password: '',
    userLoggedIn: null,
    currentUser: {"id":141,"first_name":"Sedef","last_name":"Orbay","age":28,"bio":"Should have burned this place down when I had the chance.","location":"Erzurum","occupation":"Manufacturing Associate","college":"Kub Academy","picture":"https://randomuser.me/api/portraits/women/43.jpg","email":"sedef.orbay@example.com","password":"misty1","posts":[{"id":493,"caption":"Rhetoric is the art of ruling the minds of men.","user_id":141,"img_url":null},{"id":524,"caption":"Only the educated are free.","user_id":141,"img_url":null},{"id":601,"caption":"Quality is not an act, it is a habit.","user_id":141,"img_url":null}]}
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
  // console.log(id)
  const indivUserObj = this.state.users.find(user => user.id === id)
  this.setState({
    indivUser: indivUserObj
  })
}

handleNewComment = (newCom) => {
  this.setState({ comments: [...this.state.comments, newCom] }) 
}

handleLogOut = () => {
  this.setState({
    loggedIn: false
  })
}

handleLike = (postID) => {
  console.log(postID)
  fetch('http://localhost:3000/likes', {
    method: 'POST', 
    headers: {
      'content-type': 'application/json',
      'accept': 'application/json'
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
  // console.log(content)
  console.log({ user_id: id, caption: content, date: "2020-06-18"})
  fetch('http://localhost:3000/posts', {
    method: 'POST', 
    headers: {
      "content-type": 'application/json',
      accept: 'application/json'
    },
    body: JSON.stringify({ user_id: id, caption: content, date: "2020-06-18"})
  })
    .then(res => res.json())
    .then(posts => this.setState({ posts: [...this.state.posts, posts], newPost: '' }))
    .then(posts => console.log(posts))
}



handleOnchange = (event) => {
  this.setState({ [event.target.name]: event.target.value })
}

handleLogIn = (e) => {
  e.preventDefault()
  const email = this.state.email 
  const user = this.state.users.find(user => user.email === email)
  if (user.password === this.state.password){
    this.setState({ loggedIn: true, currentUser: user, email: '', password: '' })
    // this.props.history.push(`/posts`);
  }
}


submitPost = (obj, postID) => {
  // console.log(obj)
  const content = this.state.newPost
  if( this.state.loggedIn === true ) {
        // console.log(obj, postID)
        const user = this.state.currentUser.id 
        fetch('http://localhost:3000/comments', {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
            accept: 'application/json'
          },
          body: JSON.stringify({
            content: obj, 
            post_id: postID,
            user_id: user
          })
        }).then(res => res.json()).then(newCom => this.setState({ comments: [...this.state.comments, newCom]}))
      } else {
        alert('Must be signed in to leave a comment')
      }
}


handleDelete = (id) => {
  fetch('http://localhost:3000/users/' + id, {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json',
      accept: 'application/json'
    }
  })
  alert('YOUR ACCOUNT HAS BEEN DELETED')
  this.setState({ loggedIn: false, currentUser: null })
}

  render() {
    console.log(this.state.handleLogOut)
    return (
      <div className="App">
        <Nav handleLogout={this.handleLogOut} loggedIn={this.state.loggedIn} user={this.state.currentUser} />
        {/* <UsersHome/> */}
        <Switch>
          {/* <Route path="/users/:id" component={User} /> */}
          <Route path='/posts' render={() => this.state.posts.map(post => <Post currentUser={this.state.currentUser} likes={this.state.likes} handleLike={this.handleLike} handleNewComment={this.handleNewComment} key={post.id} commentsFromState={this.state.comments} {...post} users={this.state.users} />) } />
          <Route path="/users/:id" render={() => <User handleDelete={this.handleDelete} friends={this.state.friends} users={this.state.users} comments={this.state.comments} submitPost={this.submitPost} currentUser={this.state.currentUser} likes={this.state.likes} posts={this.state.posts} handleOnchange={this.handleOnchange} handleSubmitNewPost={this.handleSubmitNewPost} newPost={this.state.newPost} deletePost={this.deletePost} user={this.state.indivUser} />} />
          <Route path="/users" render={() => <UserIndex loggedIn={this.state.loggedIn} currentUserFunc={this.currentUser} users={this.state.users} />} />
          <Route path="/login" render={() => <LoginForm handleSubmit={this.handleLogIn} handleChange={this.handleOnchange} email={this.state.email} password={this.state.password}/>} />
          <Route path="/signup" component={SignupForm} />
          <Route path="/" component={Landing} />
        </Switch>
      </div>
    );
  }
}

{/* <Route path="/help" render={() => <Help exampleCustomProp={false} />} /> */}

export default App;
