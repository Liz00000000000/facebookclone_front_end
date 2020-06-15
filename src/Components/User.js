import React, { Component } from 'react'
import Post from './Post'

const User = (props) => {
    let friendsArray = props.friends.filter(friend => friend.user_id_1 === props.id || friend.user_id_2 === props.id)
    let friends = friendsArray.length
    let posts = props.posts.length
        return (
            <div>
                <div className='hero'></div>
                <div className='user-info'>
                    <div className='inner-container'>

                        <div className='left-container'>
                        <div><span>{friends}</span> friends</div>
                         <div><span>{posts}</span> posts</div>
                        <div>Age: <span>{props.age}</span></div>
                        </div>

                        <div className='right-container'>
                        <div>Job: <span>{props.occupation}</span></div>
                        <div>City: <span>{props.location}</span></div>
                        <div>School: <span>{props.college}</span></div>
                         </div>


                         <div className='person-container'>
                             <span className='name'>{props.first_name} {props.last_name}</span>
                             <img src={props.picture} alt={props.first_name}/>
                             <span className='bio'>{props.bio}</span>

                         </div>

                    </div>
                </div>

                {/* {props.posts.map(post => <Post key={post.id} {...post} likes={props.likes} comments={props.comments} />)} */}
            </div>
        )
}

export default User
