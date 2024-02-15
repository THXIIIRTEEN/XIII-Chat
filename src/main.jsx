import App from './App.jsx'
import './index.css'
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ProfilePage from "./components/ProfilePage/ProfilePage.jsx"
import Chat from './components/Chat/chat.jsx';


const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>
        
    },
    {
      path: "ProfilePage",
      element: <ProfilePage/>,
    },
    {
      path: "Chat",
      element: <Chat/>
    }

  ]);
  
  createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
  );
