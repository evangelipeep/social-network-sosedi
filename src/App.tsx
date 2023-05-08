import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Layout } from "./components/layout/Layout"
import Home from "./components/pages/home/Home"
import Profile from "./components/pages/profile/Profile"
import Friends from "./components/pages/friends/Friends"
import Messages from "./components/pages/messages/Messages"
import Login from "./components/pages/auth/login/Login"
import Register from "./components/pages/auth/register/Register"

function App() {
  return (
    <div className="App">
      <>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="/" element={<Home />} />
            <Route path="friends" element={<Friends />} />
            {/* <Route path="messages" element={<Messages />} /> */}
            {/* <Route path="profile" element={<Profile />} /> */}
          </Route>
        </Routes>
      </>
    </div>
  )
}

export default App
