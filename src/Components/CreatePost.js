import React from 'react'
import moment from 'moment'//for better understanding check official website

class CreatePost extends React.Component {
    constructor(props) {
        super(props);
        // console.log('props from Create Post',props)

        this.state={
            Text:props.Post?props.Post.Text:'',
            CreatedAt:props.Post?props.Post.CreatedAt:moment(),
            error:''
        };

    }

    onTextChange=(event) =>{
        const Text=event.target.value
        if(Text.length>300){//if u want words less than 10 ... Title.split(" ").length>10||
            this.setState(()=>({error:'Text must contain less than 300 characters'}))
        }
        else
        {
            this.setState(()=>({error:''}))
            this.setState(()=>({Text}))
        }
        
    }

    onSubmit=(e)=>{
        e.preventDefault()
        if(!this.state.Text){
            this.setState(()=>({error:'Text is required'}))
        }
        else{
            this.setState(()=>({error:''}))//this function must retur
            this.props.onSubmit({
                Text:this.state.Text,
                CreatedAt:this.state.CreatedAt.valueOf()
            })

            this.setState(()=>({Text:''}))
        }
    }

    render() {
        // console.log('properties',this.props)
        return(
            <div className="post">
                {this.state.error&&<p className="error">{this.state.error}</p>}
                    <div className="post-top">
						<div className="post-top-username-div">
                            <img className="post-top-photo" src={this.props.imgUrl}/>
							<p className="username-text">{this.props.Username}</p>
						</div>
					</div>


                

                    <div className="create-post-textarea">
						<textarea 
                        className="submit-post-textarea"  
                        placeholder="hi"
                        value={this.state.Text}
                        onChange={this.onTextChange}
                        >
						</textarea>
					</div>

					<button onClick={this.onSubmit}  className="submit-post">Submit</button>

               </div>
        )
    }
}
export default CreatePost