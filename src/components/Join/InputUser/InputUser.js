import React from 'react'
import { TextField } from "@material-ui/core";

export default function InputUser({name, setName}) {
    return (
			<div>
				<TextField
					id="standard-basic"
					label="User"
					value={name}
					onChange={(e) => setName(e.target.value)}
					autoComplete="off"
				/>
			</div>
		);
}
