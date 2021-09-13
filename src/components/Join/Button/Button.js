import React from 'react'
import {Link} from "react-router-dom"
import {Button} from "@material-ui/core";
import "./Button.css"

export default function ButtonToTheChat({name, room}) {
    return (
			<div>
                <Link to={`/chat?name=${name}&room=${room}`} className="link">
				  <Button variant="outlined">Enter</Button>
                </Link>
			</div>
		);
}
