import Input from "../input/input"
import GradientButton from "../GradientButton/GradientButton"
import "./LoginSection.css"
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import useStore from "../store"

export const Username = "Ronaldo";

export default function LoginSection() {

    const inputs = document.getElementsByTagName("input")

    const [user, userSet] = useState("false")

    const [username, SetUsername] = useState("Noob")

    useStore(state => state.currentUser = username)

    const navigate = useNavigate();

    // const useStore = create((set) => ({
    //     currentUsername: username,
    //   }))

    function userExist(status) {
        userSet(status)
    }

    function loginFunction(e) {
        e.preventDefault()

        let superData = []
        const userData = [... inputs]

        userData.forEach((inputData) => {
            superData.push(inputData.value)
        })
        
        SetUsername(superData[0])

        async function getUsers() {
            let response = await fetch('https://just-bumpy-clipper.glitch.me/logins');
            let dataArray = []

            if (response.ok) {
                let data = await response.json();
              
                data.forEach((profile => {
                    dataArray.push(Object.values(profile))
                }))

                let dataStatus = [] 

                dataArray.forEach((user => {
                    dataStatus.push(user.includes(superData[0]))
                    }))

                    if (dataStatus.includes(true)) {
                        const p = dataStatus.indexOf(true)

                        if (dataArray[p].includes(superData[0]) && dataArray[p].includes(superData[1])) {
                            navigate('/ProfilePage')
                        }

                        else {
                            userExist("true")
                        }
                     
                    }

                    else {
                        userExist("true")
                    }
            
            return data

            } else {
              alert('error', response.status);
            }
           }
        
           getUsers();   
    }

    return (
        <section className="LoginSection">
            <label id='email'>Username</label>
            <Input id="email" className={user == "true" ? "MessageIcon inputError" : "MessageIcon"} placeholder="Please Enter your Username" type="text"/>
            
            <label id='password'>Password</label>
            <Input id="password" className={user == "true" ? "MessageIcon inputError" : "MessageIcon"} placeholder="Please Enter your Password" type="password"/>
            
            {user == "true" &&
                (<p className="errorMessage">You entered the wrong user or password</p>)
            }

            <a className='purpleLink' href='#'>Forgot Password?</a>

            <GradientButton onClick={loginFunction}>Login</GradientButton>
            <a className='grey'>Contact Us</a>
        </section>

    )
    
}


