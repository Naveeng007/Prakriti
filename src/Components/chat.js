import React from 'react'
class Chat extends React.Component{
    render() {
        return(
            <div className="chat">

                <div className="chat-bar">
                    {/* <div className="Online-users">
                        <div>
                            <img className="post-top-photo" src={'./images/chasma.jpg'}/>
                            
                        </div>
                       
                        <div className="user-message-info">
                            <p className='user'>Users</p>
                            
                        </div>
                    </div> */}

                    <div className="post-top">
						<div className="post-top-username-div">
                            <img className="post-top-photo" src={'./images/chasma.jpg'}/>
							<p className="username-text">Naveen</p>
						
						</div>

                        <div className="post-top-delete">
							<input type="image"  className="username-text" width="20px" height="20px" src="./images/left-arrow.png" />
						</div>

						
					</div>

                    <div className="chat-box">
                        <div className="user1-message">
                        <p > I’m currently Student </p>
                        <h5>Satruday 22 july 10 am</h5>
                        </div>
                        <div className="user2-message">
                        <p > I’m currently Student</p>
                        <h5>Satruday 22 july 10 am</h5>
                        </div>
                        <div className="user1-message">
                        <p > I’m currently Student </p>
                        <h5>Satruday 22 july 10 am</h5>
                        </div>
                        <div className="user2-message">
                        <p > I’m currently Student</p>
                        <h5>Satruday 22 july 10 am</h5>
                        </div>
                        <div className="user1-message">
                        <p > I’m currently Student </p>
                        <h5>Satruday 22 july 10 am</h5>
                        </div>
                        <div className="user2-message">
                        <p > I’m currently Student</p>
                        <h5>Satruday 22 july 10 am</h5>
                        </div>
                        <div className="user1-message">
                        <p > I’m currently Student </p>
                        <h5>Satruday 22 july 10 am</h5>
                        </div>
                        <div className="user2-message">
                        <p > I’m currently Student</p>
                        <h5>Satruday 22 july 10 am</h5>
                        </div>
                        <div className="user1-message">
                        <p > I’m currently Student </p>
                        <h5>Satruday 22 july 10 am</h5>
                        </div>
                        <div className="user2-message">
                        <p > I’m currently Student</p>
                        <h5>Satruday 22 july 10 am</h5>
                        </div>
                        <div className="user1-message">
                        <p > I’m currently Student </p>
                        <h5>Satruday 22 july 10 am</h5>
                        </div>
                        <div className="user2-message">
                        <p > I’m currently Student</p>
                        <h5>Satruday 22 july 10 am</h5>
                        </div>
                        
                        
                       
                        
                    </div>

                    <div className="chat-type-box-div">
                        <textarea className="chat-type-box"  placeholder="hi">
                        </textarea>
                        <div className="post-top-delete">
							<input type="image"  className="username-text" width="20px" height="20px" src="./images/send.png" />
						</div>
                    </div>
                </div>


            </div>
        )
    }
}

export default Chat