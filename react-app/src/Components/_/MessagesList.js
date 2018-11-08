import React, { Component } from 'react';
import {list,remove} from './../../services/api'

class MessagesList extends Component {
	constructor(){
		super();
		this.state = {
			messages:[]
		}
	}
	removeData(messageId){
		remove('messages',messageId)
	}
	componentWillMount(){
		list('messages')
		.then(response=>{
			return response.json()
		})
		.then(json=>{
			this.setState({
				messages:json
			})
		})
	}
  render() {
    return (

		<div>
			<h3>Message list</h3>
			{
				this.state.messages && this.state.messages.length>0 &&
				<table className="table">
					<thead>
						<tr>
							<td>Name</td>
							<td>Email</td>
							<td>Message</td>
						</tr>
					</thead>
					<tbody>
					{
							this.state.messages.map(message =>{
								return(
									<tr key={message._id}>
										<td>{message.name}</td>
										<td>{message.email}</td>
										<td>{message.message}</td>
									</tr>
								)
							})
					}
					</tbody>
				</table>
			}
		</div>

    );
  }
}

export default MessagesList;
