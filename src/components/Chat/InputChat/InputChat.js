import React from 'react'
import {TextField, Button} from "@material-ui/core"
import "./InputChat.css"

export default function InputChat({currentMessage, setCurrentMessage, sendMessage}) {
    return (
			<div>
				<TextField
					id="filled-basic"
					label="Message"
					variant="filled"
					value={currentMessage}
					onChange={(e) => setCurrentMessage(e.target.value)}
					className="input"
					autoComplete="off"
				/>
				<Button
					variant="contained"
					color="primary"
					onClick={(e) => sendMessage(e)}
					className="button">
					Send
				</Button>
			</div>
		);
}
