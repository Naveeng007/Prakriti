import React from 'react'
import {connect} from 'react-redux'
import { format, formatDistance, formatRelative, subDays } from 'date-fns'
import {F_DeletePost,F_LikePost,F_DislikePost} from '../Action/Post'
class PostListitem extends React.Component {
    constructor(props){//we are using props which is send from another component
        super(props)
        console.log('props from Listitem',props)
    }

    DeletePost=(e)=>{
        console.log('Delete Post CLicked',this.props.PostId)
        this.props.F_DeletePost(this.props.PostId)
    }
    render() {
        return (
            <div className="post">
                <div className="post-top">
                    <div className="post-top-username-div">
                        <img className="post-top-photo" src={'./images/chasma.jpg'}/>
                        <div className="post-name-time">
                            <p className="username-text">Naveen</p>
                            <h5 className="username-text">{format(new Date(this.props.CreatedAt), 'PPPP') }</h5>
                        </div>
                        
                    </div>

                    <div className="post-top-delete">
                    { this.props.CurrentUserId===this.props.UserId &&   <input type="image" onClick={this.DeletePost}  className="username-text" width="20px" height="20px" src="./images/delete.png" />}
                    </div>
                </div>

                <div className="post-textarea">
                    <p> {this.props.Text}  </p>
                </div>

                <div className="post-feedbacks">
                    <div className="like">
                            {/* <button className="like-button">Like</button> */}
                            <input type="image"  className="like-button" width="20px" height="20px" src="./images/like.png" />
                            {false&&<input type="image"  className="like-button" width="20px" height="20px" src="./images/liked.png" />}
                            <p className="like-count">{this.props.Likes}</p>
                    </div>

                    <div className="dislike">
                            {/* <button className="dislike-button">Dislike</button> */}
                            <input type="image"  className="dislike-button" width="20px" height="20px" src="./images/dislike.png" />
                            {false&&<input type="image"  className="dislike-button" width="20px" height="20px" src="./images/disliked.png" />}
                            <p className="like-count">{this.props.Dislikes}</p>
                    </div>
                
            </div>
        </div>

        )
    }
}

const mapStateToProps=(state) =>{
    return{
        CurrentUserId:state.auth.uid
    }   
}
const mapDispatchToProps=(dispatch) =>{
    return{
        F_DeletePost:(PostId)=>dispatch(F_DeletePost(PostId)),
        F_LikePost:(PostId)=>dispatch(F_LikePost(PostId)),
        F_DislikePost:(PostId)=>dispatch(F_DislikePost(PostId)),
    }   
}

export default connect(mapStateToProps,mapDispatchToProps)(PostListitem) 
// export default PostListitem