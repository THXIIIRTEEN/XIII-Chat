import Styles from "./Message.module.css"

export default function Message(props) {

    return (
    
        <div className={Styles["message_body"]}>
                <img className={Styles["message_avatar-icon"]} src="https://avatars.mds.yandex.net/i?id=2f62fce40ccd2ce10fdc2850fe99a037_l-8257511-images-thumbs&ref=rim&n=13&w=1080&h=1080"/>
                <div className={Styles["message_text-content"]}>
                    <div className={Styles["message_text-content__top"]}>
                        <h4>{props.username}</h4><p>{props.time}</p></div><p>{props.message}</p>
                </div>
        </div>
    )
}