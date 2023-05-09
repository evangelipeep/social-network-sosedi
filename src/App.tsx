import React from "react"
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
import { Layout } from "./components/layout/Layout"
import Home from "./components/pages/home/Home"
import SocialProfile from "./components/pages/profile/SocialProfile"
import Friends from "./components/pages/friends/Friends"

import Login from "./components/pages/auth/login/Login"
import Register from "./components/pages/auth/register/Register"
import Feed from "./components/pages/home/Feed"
import ChatPage from "./components/pages/messages/ChatPage"

const App: React.FC = () => {
  const currentUser: User = {
    id: 1,
    username: "totoro",
    name: "Totoro",
    age: 225,
    city: "Okinava",
    university: "The Forest",
    avatar: "path/to/avatar.jpg",
    isFriend: true,
    posts: [
      { id: 1, content: "Post 1" },
      { id: 2, content: "Post 2" },
    ],
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route index element={<Home />} />{" "} */}
          <Route index element={<Feed />} />{" "}
          <Route path="login" element={<Login />} />{" "}
          <Route path="register" element={<Register />} />{" "}
          <Route path="friends" element={<Friends />} />
          <Route path="messages" element={<ChatPage />} />
          <Route
            path="profile"
            element={<SocialProfile user={currentUser} isOwnProfile={true} />}
          />
        </Route>
      </Routes>
    </div>
  )
}

export default App
