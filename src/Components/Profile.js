import React from 'react'
import PostOnProfilePage from './PostOnProfilePage'

const Profile = (props) => {

    // const posts = props.user.posts
    // console.log(posts.length)


    const handleClick = (e) => {
     e.preventDefault()
     props.handleSubmitNewPost(props.user.id)
    }

    const showNewPostForm = () => {
        return <div className="new-post-container">
                <h3>Write New Post</h3>
                <input type="text" name='newPost' onChange={props.handleOnchange} value={props.newPost} placeholder='What are you up to?'></input>
                <button onClick={handleClick}>Submit</button>
            </div>
    }


    let posts = props.posts.filter(post => post.user_id === props.user.id)
    let numOfPost = posts.length

    let friends = props.friends.filter(friend => friend.user_id_1 === props.user.id || friend.user_id_2 === props.user.id )
    
    console.log(props.user)
    
    return(
        <div>
            <div className="hero"></div>
            <div className="user-info">
                <div className="left-container">
                    <div><span>{friends.length}</span> friends</div>
                    <div><span>{numOfPost}</span> posts</div>
                    {/* <div><span>{posts.length}</span> posts</div> */}
    <div>Age: <span>{props.user.age}</span></div>
                    <div>Job: <span>{props.user.occupation}</span></div>
                    <div>City: <span>{props.user.location}</span></div>
                    <div>School: <span>{props.user.college}</span></div>
                </div>
                <div className="person-container">
    <span className="name">{props.user.first_name} {props.user.last_name}</span>
                    <img src={props.user.picture} alt=""/>
                    <span className="bio">{props.user.bio}</span>
                </div>
            </div>
            <div className="post-container">
                { props.user.id === props.currentUser.id ? showNewPostForm() : null }
                <div className="inner-container">
                    {posts.map(post => <PostOnProfilePage likes={props.likes}  currentUser={props.currentUser} comments={props.comments} submitPost={props.submitPost} currentUser={props.currentUser} likes={props.likes} deletePost={props.deletePost} users={props.users} key={post.id} {...post} />)}
                </div>
            </div>
            {props.currentUser.id === props.user.id ? <button onClick={() => props.handleDelete(props.user.id)}>Delete Account</button> : null }
        </div>
    )
}

export default Profile