import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UsersHome from './Components/UsersHome'
import Nav from './Components/Nav'
import UserIndex from './Components/UserIndex';
import { Route, Switch } from 'react-router-dom';
import Landing from './Components/Landing';
import User from './Components/User';
import Post from './Components/Post'


class App extends Component {

  state = {
    users: [],
    posts: [],
    likes: [],
    comments: [],
    friends: [],
    replies: [],
    search: '',
    indivUser: {}
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

  render() {
    
    return (
      <div className="App">
        <Nav />
        {/* <UsersHome/> */}
        <Switch>
          {/* <Route path="/users/:id" component={User} /> */}
          <Route path='/posts' render={() => this.state.posts.map(post => <Post key={post.id} commentsFromState={this.state.comments} {...post} users={this.state.users} />) } />
          <Route path="/users/:id" render={() => <User user={this.state.indivUser} />} />
          <Route path="/users" render={() => <UserIndex currentUserFunc={this.currentUser} users={this.state.users} />} />
          <Route path="/" component={Landing} />
        </Switch>
      </div>
    );
  }
}

{/* <Route path="/help" render={() => <Help exampleCustomProp={false} />} /> */}

export default App;
