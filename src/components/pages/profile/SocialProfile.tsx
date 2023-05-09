import React, { useState } from "react"
import "./socialProfile.css"

interface Post {
  id: number
  content: string
  image?: string
}

export interface User {
  id: number
  name: string
  age: number
  city: string
  university: string
  avatar: string
  isFriend: boolean
  posts: Post[]
}

interface SocialProfileProps {
  user: User
  isOwnProfile: boolean
}

const SocialProfile: React.FC<SocialProfileProps> = ({
  user,
  isOwnProfile,
}) => {
  const [newPostContent, setNewPostContent] = useState("")
  const [newPostImage, setNewPostImage] = useState("")

  const handlePostContentChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setNewPostContent(event.target.value)
  }

  const handlePostImageChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files && event.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setNewPostImage(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleAddPost = () => {
    // Обработка добавления нового поста
    // Здесь можно использовать состояние newPostContent и newPostImage
    // для отправки данных на сервер или обновления локального состояния пользователя
    setNewPostContent("")
    setNewPostImage("")
  }

  const handleToggleFriendship = () => {
    // Обработка добавления/удаления друга
    // Здесь можно использовать состояние пользователя (user) и выполнить соответствующие действия
  }

  return (
    <div className="social-profile">
      <div className="profile-info">
        <div className="avatar">
          <img src={user.avatar} alt="User Avatar" />
        </div>
        <div className="user-info">
          <h2>{user.name}</h2>
          <p>{`Age: ${user.age}`}</p>
          <p>{`City: ${user.city}`}</p>
          <p>{`University: ${user.university}`}</p>
        </div>
        {isOwnProfile ? (
          <div className="new-post">
            <textarea
              placeholder="Что у Вас нового?.."
              value={newPostContent}
              onChange={handlePostContentChange}></textarea>
            <input type="file" onChange={handlePostImageChange} />
            <button onClick={handleAddPost}>Post</button>
          </div>
        ) : (
          <div className="friendship-status">
            <button onClick={handleToggleFriendship}>
              {user.isFriend ? "Remove from Friends" : "Add to Friends"}
            </button>
          </div>
        )}
      </div>
      <div className="posts">
        {user.posts.map((post) => (
          <div key={post.id} className="post">
            <p>{post.content}</p>
            {post.image && <img src={post.image} alt="Post Image" />}
          </div>
        ))}
      </div>
    </div>
  )
}

export default SocialProfile
