import './App.css'
import "./components/ChooseButton/ChooseButton"
import LoginSection from './components/LoginSection/LoginSection'
import SignUpSection from "./components/SignUpSection/SignUpSection"
import { useState } from 'react';
import ChooseButton from './components/ChooseButton/ChooseButton'
import Logo from "./components/Logo/Logo"

function App() {
  const [content, setContent] = useState("login")

  function handleClick(type) {
    setContent(type)
  }

  return (  
    <>
      <div className='body-registration'>
        <form id='form' className='registration_block'>
              <Logo/>
              <div className='chooseButton_block'>
                  <ChooseButton className={content=="login" ? "chooseButton chooseButton__active" : "chooseButton"} onClick={() => handleClick('login')}>LOGIN</ChooseButton>
                  <ChooseButton className={content=="registration" ? "chooseButton chooseButton__active" : "chooseButton"} onClick={() => handleClick('registration')}>SIGN UP</ChooseButton>
              </div>

        {content=="login" &&
          (<LoginSection/>)
        }

        {
          content =="registration" &&
          (<SignUpSection/>)
        }
        
        </form>
      </div>
    </>
  )
}

export default App
