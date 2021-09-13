import React from 'react'
import NameOfChat from "./NameOfChat/NameOfChat.js"
import UsersInChat from './UsersInChat/UsersInChat.js'
import "./Head.css"

export default function Head({users, room}) {
    return (
			<div className="head">
				<NameOfChat room={room} />
				<UsersInChat users={users} />
			</div>
		);
}
