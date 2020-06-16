import React, { Component } from 'react'
import PostOnProfilePage from './PostOnProfilePage'

const User = (props) => {

    const posts = props.user.posts
    // console.log(posts.length)

    return(
        <div>
            <div className="hero"></div>
            <div className="user-info">
                <div className="left-container">
                    <div><span>50</span> friends</div>
                    <div><span>1</span> posts</div>
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
                <div className="inner-container">
                    {posts.map(post => <PostOnProfilePage deletePost={props.deletePost} user={props.user} key={post.id} {...post} />)}
                </div>
            </div>
        </div>
    )
}

export default User

// let friendsArray = props.friends.filter(friend => friend.user_id_1 === props.id || friend.user_id_2 === props.id)
    // let friends = friendsArray.length
    // let posts = props.posts.length

    // const handleClick = () => {
    //     console.log(props.first_name, props.last_name)
    // }

    //     return (
    //         <div>
    //             <div className='hero'></div>
    //             <div className='user-info'>
    //                 <div className='inner-container'>

    //                     <div className='left-container'>
    //                     <div><span>{friends}</span> friends</div>
    //                      <div><span>{posts}</span> posts</div>
    //                     <div>Age: <span>{props.age}</span></div>
    //                     <div>Job: <span>{props.occupation}</span></div>
    //                     <div>City: <span>{props.location}</span></div>
    //                     <div>School: <span>{props.college}</span></div>
    //                     </div>

    //                      <div className='person-container'>
    //                          <span onClick={handleClick} className='name'>{props.first_name} {props.last_name}</span>
    //                          <img src={props.picture} alt={props.first_name}/>
    //                          <span className='bio'>{props.bio}</span>

    //                      </div>

    //                 </div>
    //             </div>

    //             {/* {props.posts.map(post => <Post key={post.id} {...post} likes={props.likes} comments={props.comments} />)} */}
    //         </div>
    //     )