import React from "react"
import "./profile.css"

interface ProfileProps {
  username: string
  avatar: string
  status: string
  age: number
  city: string
  university: string
  friendsCount: number
  messagesCount: number
  isFriend?: boolean
  isOwnProfile?: boolean
  onAddFriend?: () => void
  onRemoveFriend?: () => void
}

const Profile: React.FC<ProfileProps> = ({
  username,
  avatar,
  status,
  age,
  city,
  university,
  friendsCount,
  messagesCount,
  isFriend,
  isOwnProfile,
  onAddFriend,
  onRemoveFriend,
}) => {
  return (
    <div className="profile-container">
      <div className="profile-row">
        <div className="avatar">
          <img src={avatar} alt="Avatar" />
        </div>
        <div className="status">{status}</div>
        <div className="username">{username}</div>
        <div className="info">
          <span>{age} лет</span>
          <span>{city}</span>
          <span>{university}</span>
        </div>
      </div>
      <div className="profile-row">
        <div className="graph">
          <div className="counter">
            <div className="counter-item">
              <span className="counter-value">{friendsCount}</span>
              <span className="counter-label">Друзья</span>
            </div>
            <div className="counter-item">
              <span className="counter-value">{messagesCount}</span>
              <span className="counter-label">Сообщения</span>
            </div>
          </div>
          <div className="links">
            {isOwnProfile ? (
              <div className="post-field">
                <input type="text" placeholder="Напишите что-нибудь..." />
                <input type="file" accept="image/*" />
              </div>
            ) : (
              <div className="friend-action">
                {isFriend ? (
                  <button className="remove-friend" onClick={onRemoveFriend}>
                    Удалить из друзей
                  </button>
                ) : (
                  <button className="add-friend" onClick={onAddFriend}>
                    Добавить в друзья
                  </button>
                )}
              </div>
            )}
            <a href="#">Ссылка на друзей</a>
            <a href="#">Ссылка на сообщения</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
