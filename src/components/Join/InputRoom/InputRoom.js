import React from 'react'
import {TextField} from "@material-ui/core"

export default function InputRoom({room, setRoom}) {
    return (
			<div>
				<TextField
					id="standard-basic"
					label="Room"
					value={room}
					onChange={(e) => setRoom(e.target.value)}
					autoComplete="off"
				/>
			</div>
		);
}
