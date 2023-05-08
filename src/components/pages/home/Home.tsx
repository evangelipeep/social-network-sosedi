import React, { useState } from "react"
import "./home.css"

interface Post {
  id: number
  content: string
  likes: number
  isLiked: boolean
}

const Home: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([])

  const handleLike = (postId: number) => {
    setPosts((prevPosts) => {
      return prevPosts.map((post) => {
        if (post.id === postId && !post.isLiked && post.likes < 1) {
          return { ...post, isLiked: true, likes: post.likes + 1 }
        }
        return post
      })
    })
  }

  const renderPosts = () => {
    return posts.map((post) => (
      <div className="post" key={post.id}>
        <p>{post.content}</p>
        <button
          className={`like-button ${post.isLiked ? "liked" : ""}`}
          onClick={() => handleLike(post.id)}>
          <span className="heart-icon">{post.likes}</span>
        </button>
      </div>
    ))
  }

  return <div className="feed">{renderPosts()}</div>
}

export default Home
