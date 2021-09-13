import React from 'react'
import ScrollToBottom from "react-scroll-to-bottom"
import "./Messages.css"
import Message from "./Message/Message.js"

export default function Messages({messages, name}) {
    return (
			<ScrollToBottom className="messages">
				{messages.map((message, i) => (
					<div key={i} className={name === message.user ? "my-user" : "other-user"}>
						<Message message={message} name={name}/>
					</div>
				))}
			</ScrollToBottom>
		);
}
