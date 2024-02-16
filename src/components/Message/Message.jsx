import Styles from "./Message.module.css"

export default function Message(props) {

    return (
    
        <div className={Styles["message_body"]}>
                <img className={Styles["message_avatar-icon"]} src={props.image}/>
                <div className={Styles["message_text-content"]}>
                    <div className={Styles["message_text-content__top"]}>
                        <h4>{props.username}</h4><p>{props.time}</p></div><p>{props.message}</p>
                </div>
        </div>
    )
}