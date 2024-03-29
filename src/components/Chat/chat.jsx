import Styles from "./chat.module.css"
import useStore from "../store";
import Message from "../Message/Message";
import { useState } from "react";
import useImages from "../store-images";
import { useWebSocket } from 'react-use-websocket';

export default function Chat() {

    const currentUsername = useStore(state => state.currentUser)

    const currentImage = useImages(state => state.image)

    const [messageArray, setMessageArray] = useState([])

    console.log(currentImage)

    fetch('https://thxiii-messages.glitch.me/messages')
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setMessageArray(data)
        });

    function sendMessage(e) {

        e.preventDefault()

        let messageInput = document.getElementById("chat_input")

        let currentTime = new Date().getHours() + ":" + new Date().getMinutes()

        let message = {
            username: currentUsername,
            message: messageInput.value,
            time: currentTime,
            image: currentImage
        } 

        fetch("https://thxiii-messages.glitch.me/messages", {
            method: "POST",
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(message) 
        })
        
        document.getElementById("chat_input").value = ""
    }

    return (
        <div id="chat_body" className={Styles["chat_body"]}>
            <div className={Styles["chat_container"]}>
                <div id="messages_container" className="messages_container">
                <ul>
                    {messageArray.map((item) => {
                        return (
                            <li className={Styles["listStyle"]} key={item.id}>
                                <Message {...item} />
                            </li>
                        );
                    })}
                </ul>
                </div>

            </div>

            <form className={Styles["chat_form"]}>
                    <input type="text" id="chat_input" className={Styles["chat_input"]} placeholder="Type something..."/>
                    <button className={Styles["submit-button"]} type="submit" onClick={sendMessage}>Send</button>
            </form>
        </div>
    )
}