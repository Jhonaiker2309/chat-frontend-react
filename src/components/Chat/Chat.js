import React, {useState, useEffect} from 'react'
import Head from "./Head/Head.js"
import InputChat from "./InputChat/InputChat.js"
import Messages from "./Messages/Messages.js"
import queryString from "query-string"
import socketClient from "socket.io-client"
import dotenv from "dotenv"
import "./Chat.css"

dotenv.config();

export default function Chat() {
    const [name, setName] = useState("")
    const [room, setRoom] = useState("")
    const [messages, setMessages] = useState([])
    const [currentMessage, setCurrentMessage] = useState("")
    const [users, setUsers] = useState([])

    let socket = socketClient(process.env.REACT_APP_SERVER);

    useEffect(() => {
      console.log(process.env.REACT_APP_SERVER);
      const {name, room} = queryString.parse(window.location.search)
      setName(name)
      setRoom(room)
                  
      socket.emit("join", { name, room });

      socket.on("message", (message) => {
        setMessages((messages) => [...messages,message]);
      })

      socket.on("roomUsers", ({users})=> {
        setUsers(users)
      })
    }, [])

    const sendMessage = (e) => {
      e.preventDefault()

      if(currentMessage){
        socket.emit("sendMessage", ({name, currentMessage, room}),  setCurrentMessage(""))
      }
    }
    return (
			<div className="chat">
				<div>
					<Head users={users} room={room}/>
				</div>
				<div className="body-of-chat">
					<div className="messages">
						<Messages messages={messages} name={name}/>
					</div>
					<div className="chat-button">
						<InputChat
							currentMessage={currentMessage}
							sendMessage={sendMessage}
							setCurrentMessage={setCurrentMessage}
                            
						/>
					</div>
				</div>
			</div>
		);
}
