import React from 'react'

export default function Message({message, name}) {
    return (
			<span className={name === message.user ? `my-user` : "other-user"}>
				{message.user} : {message.text}
			</span>
		);
}
