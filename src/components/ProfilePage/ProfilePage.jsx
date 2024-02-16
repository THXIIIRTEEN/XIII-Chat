import "./ProfilePage.css"
import GradientButton from "../GradientButton/GradientButton"
import { useNavigate } from "react-router-dom";
import useStore from "../store";
import useImages from "../store-images";
import { useState } from "react";

export default function ProfilePage() {

    const navigate = useNavigate();

    const currentUsername = useStore(state => state.currentUser)

    const [image, SetImage] = useState("https://avatars.mds.yandex.net/i?id=2f62fce40ccd2ce10fdc2850fe99a037_l-8257511-images-thumbs&ref=rim&n=13&w=1080&h=1080")

    useImages(state => state.image = image)
 
    function Join() {
        navigate('/Chat')
    }

    function sendImage(e) {
        e.preventDefault()

        let image = document.getElementById("inpup").value

        SetImage(image)
    }

    return (
        
        <div className='profilePage_body'>
            
            {/* {isChosen == true &&
                (<div className="image_post__background">
                    <div className="image_post__interface">
                        <div className="image_post"></div>
                        <button className="CancelButton">Cancel</button>
                        <GradientButton>Send</GradientButton>
                    </div>
                </div>)
            } */}



            <div className="profile_card">
                <div className="profile_banner"></div>
                <div className="profileImage">
                    <form id="ImageForm" className="ImageForm">
                        {/* <input id="file" name="file" onChange={(e) => ImageSet(e)} onClick={postImage} className="profile_input" type="file"/> */}
                    </form> 
                </div>
                <form className="linkForm">
                    <input id="inpup" type="text" placeholder="Enter link to your avatar image"/>
                    <button className="imageSubmit" onClick={sendImage}>Send</button>
                </form>

                <h4>{currentUsername}</h4>
                <p>What`s on your mind today, {currentUsername}?</p>
                <div className="profile_buttons">
                    <GradientButton onClick={Join}>Start Chatting</GradientButton>
                </div>
            </div>
        </div>
    )
}

