import React from "react"

import NewPostForm from "./NewPostForm";
import Post from "./Post";

export default class App extends React.Component{
	
	constructor (props){
		super(props);

		this.state = {
			posts: [],
			showNewPostForm: false
		}
	}

	saveNewPost(postTitle, postContent){
		this.setState({
			posts: [ ...this.state.posts, {postTitle, postContent}]
		})
		this.toggleNewPostForm();
	}

	toggleNewPostForm(){
		this.setState({
			showNewPostForm: !this.state.showNewPostForm
		})
	}

	render(){
		const posts = this.state.posts.map((post, index)=>(
			<Post 
				content = {post.postContent}
				key = {index}
				title = {post.postTitle}
			/>
		));
		return (
			<div>
				{
					this.state.showNewPostForm 
						? 
							<NewPostForm saveNewPost={this.saveNewPost.bind(this)}/>
						: 
							<button onClick={this.toggleNewPostForm.bind(this)}> New Post </button>
					}
				{posts}
			</div>
		)
	}
}