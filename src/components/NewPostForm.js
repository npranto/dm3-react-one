import React from "react";

export default class NewPostForm extends React.Component{

	constructor(props){
		super(props);

		this.state = {
			postTitle: "",
			postContent: ""
		};

	}
	
	handleChange(field, event){
		this.setState({
			[field]: event.target.value
		});
	}

	saveNewPost(){
		this.props.saveNewPost(this.state.postTitle, this.state.postContent)
	}

	render(){
		return (
			<div className="new-post-wrapper">
				<input 
					onChange={this.handleChange.bind(this, "postTitle")}
					type="text" 
					value={this.state.postTitle}
				/>
				<textarea 
					onChange={this.handleChange.bind(this, "postContent")}
					cols="30" 
					rows="10" 
					value={this.state.postContent}
				/>
				<button onClick={this.saveNewPost.bind(this)}>
					Save
				</button>
			</div>
		)
	}
}