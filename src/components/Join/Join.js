import React, {useState} from 'react'
import Button from "./Button/Button.js"
import InputRoom from "./InputRoom/InputRoom.js"
import InputUser from './InputUser/InputUser.js'
import "./Join.css"

export default function Join() {
    const [name, setName] = useState("")
    const [room, setRoom] = useState("")
    return (
			<div className="join">
				<div className="content">
					<div className="inputs">
						<InputUser name={name} setName={setName} />
					</div>
					<div className="inputs">
						<InputRoom room={room} setRoom={setRoom} />
					</div>
					<div className="buttons">
						<Button name={name} room={room} />
					</div>
				</div>
			</div>
		);
}
