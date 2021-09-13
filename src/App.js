import React from "react"
import Join from "./components/Join/Join.js"
import Chat from "./components/Chat/Chat.js"
import {  BrowserRouter as Router, Route} from "react-router-dom"
import "./App.css"

function App() {
  return (
		<Router>
			<Route exact path="/" >
				<Join/>
			</Route>
			<Route path="/chat">
				<Chat />
			</Route>
		</Router>
	);
}

export default App;
