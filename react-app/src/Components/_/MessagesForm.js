import React, { Component } from 'react';
import {create} from './../../services/api'

class MessagesForm extends Component {
	constructor(){
		super();
		this.state = {
			name:'',
			email:'',
			message: ''
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleChange(evt){
		this.setState({
			[evt.target.name]:evt.target.value
		})
	}
	handleSubmit(evt){
		evt.preventDefault()
		let message = {
			name:this.state.name,
				email:this.state.email,
					message:this.state.message
		}
		create('messages',message)
		.then(()=>{
			
		})


	}

  render() {
    return (
			<div>
				<h3>Send message</h3>
					<form onSubmit={this.handleSubmit}>


							<div  className="form-group">
								<input
								type="text"
									onChange= {this.handleChange}
									className="form-control"
									value = {this.state.name}
									name="name"
									placeholder="Name" />
							</div>
									<div  className="form-group">
									<input
									type="email"
										onChange= {this.handleChange}
										className="form-control"
										value = {this.state.email}
										name="email"
										placeholder="email@domain.com" />
									</div>
											<div  className="form-group">
												<textarea
													onChange= {this.handleChange}
													className="form-control"
													value = {this.state.message}
													name="message"
													placeholder="Message"
													rows="6">
												</textarea>
											</div>
						<div className="form-group">
							<button
								className="btn btn-primary btn-block"
								type="submit">Send Message</button>
						</div>
					</form>
			</div>

    );
  }
}

export default MessagesForm;
