// eslint-disable-next-line no-unused-vars
import React from "react"
import UserContextProvider from "./context/userContextProvider"
import Login from "./components/Login"
import Profile from "./components/Profile"

function App() {

  return (
    <UserContextProvider>
     <h1>Hiiiii Chai Coders!!</h1>
     <Login/>
     <Profile/>
    </UserContextProvider>
  )
}

export default App
