import GradientButton from '../GradientButton/GradientButton'
import Input from "../input/input"
import "./SignUpSection.css"
import { useState } from 'react';

export default function SignUpSection() {

    const inputs = document.getElementsByTagName("input")

    let isActive = 0

    const [user, userSet] = useState("false")

    function userExist(status) {
        userSet(status)
    }

    function notDefault(e) {
        e.preventDefault()

        let superData = []
        const userData = [... inputs]

        userData.forEach((inputData) => {
            superData.push(inputData.value)
        })

        let loginData = {
            username: superData[0],
            password: superData[1]
        }
        
        async function getUsers() {
            let response = await fetch('https://just-bumpy-clipper.glitch.me/logins');
            let dataArray = []

            if (response.ok) {
                let data = await response.json();
              
                data.forEach((profile => {
                    dataArray.push(Object.values(profile))
                }))

                console.log(isActive)

                let dataStatus = [] 

                dataArray.forEach((user => {
                    dataStatus.push(user.includes(superData[0]))
                    }))

                if (dataStatus.includes(true) == true) {
                    userExist("true")
                }

                else {
                    fetch('https://just-bumpy-clipper.glitch.me/logins', {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(loginData)
                    }).then(() => window.location.reload());

                }
            
            return data

            } else {
              alert('error', response.status);
            }
           }
        
           getUsers();   
          
    }

    return (    
        <section className="LoginSection RegistrationSection">
            <h3 className='white'>Let’s Learn More About You!</h3>
            <p className='light-grey'>Hello! We glad to see you there. You are on a direct path to join THXIIIRTEEN's community. Please fill out the form.</p>

            <label id='email'>Username</label>
            <Input id="email" className = {user == "true" ? "MessageIcon inputError" : "MessageIcon"} placeholder="Please Enter your Username" type="email"/>

            {user == "true" && 
                (<p className="errorMessage">This user is already exist</p>)
            }

            <label id='password'>Password</label>
            <Input id="password" className="UnlockIcon" placeholder="Please Enter your Password" type="password"/>

            <GradientButton onClick = {notDefault}>Sign Up</GradientButton>
        </section>
    )
}