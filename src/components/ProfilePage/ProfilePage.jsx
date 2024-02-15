import "./ProfilePage.css"
import GradientButton from "../GradientButton/GradientButton"
import { useNavigate } from "react-router-dom";
import useStore from "../store";

export default function ProfilePage() {

    const navigate = useNavigate();

    const currentUsername = useStore(state => state.currentUser)
 
    function postImage() {

        const getInputs = document.getElementsByTagName("input")
        const userData = [... getInputs]

        let superData = []

        userData.forEach((inputData) => {
            superData.push(inputData.value)
            
    })   
    }

    function Join() {
        navigate('/Chat')
    }

    function ImageSet(e) {
        let photo = e.target.files[0]
        console.log(photo)

        // fetch("https://formcarry.com/s/qNIMVNEeg1d",  {method: "POST", headers: {'Content-Type': 'application/json'}, body: JSON.stringify(object),  
        // }).then((response) => {
        //     return response.json();
        //     })
        //     .then((data) => {
        //     console.log(data);
        //     });

        
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
                        <input id="file" name="file" onChange={(e) => ImageSet(e)} onClick={postImage} className="profile_input" type="file"/>
                    </form>
                </div>
                <h4>{currentUsername}</h4>
                <p>What`s on your mind today, {currentUsername}?</p>
                <div className="profile_buttons">
                    <GradientButton onClick={Join}>Start Chatting</GradientButton>
                </div>
            </div>
        </div>
    )
}

