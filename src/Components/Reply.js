import React, { Component } from 'react'

class Reply extends Component {
     
    user =  this.props.users.find(user => user.id === this.props.user_id)
    
    render () {
    return (
         <div>
             <div className='reply-container'>
                 <div className='replier-name'>
                    {this.user.first_name} {this.user.last_name} 
                 </div>
                 {this.props.content}
             </div>
         </div>
      )
    }
}

export default Reply