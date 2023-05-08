import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./friendList.css"

interface Friend {
  id: number
  name: string
}

const FriendList: React.FC = () => {
  const navigate = useNavigate()
  const [friends, setFriends] = useState<Friend[]>([
    { id: 1, name: "Тоторо" },
    { id: 2, name: "Котобус" },
    { id: 3, name: "Хаяо Миядзаки" },
  ])

  const handleFriendClick = (friendId: number) => {
    navigate(`/friends/${friendId}`)
  }

  const handleRemoveFriend = (friendId: number) => {
    setFriends((prevFriends) =>
      prevFriends.filter((friend) => friend.id !== friendId)
    )
  }

  return (
    <div className="friend-list-container">
      <h1>Список друзей</h1>
      <ul className="friend-list">
        {friends.map((friend) => (
          <li key={friend.id} className="friend">
            <div className="avatar" />
            <span
              className="friend-name"
              onClick={() => handleFriendClick(friend.id)}
              style={{ color: "#910000" }}>
              {friend.name}
            </span>
            <button
              className="remove-button"
              onClick={() => handleRemoveFriend(friend.id)}>
              Удалить
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FriendList
