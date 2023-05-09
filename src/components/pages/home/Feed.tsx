import React, { useEffect, useState } from "react"
import "./feed.css" // Импорт файла стилей

interface Post {
  id: string
  text: string
  likes: number
}

const Feed: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    // Симуляция получения постов от друзей
    fetchPosts()
  }, [])

  const fetchPosts = () => {
    // Имитация асинхронного получения постов
    setIsLoading(true)
    setTimeout(() => {
      const newPosts: Post[] = [
        { id: "1", text: "Пост 1", likes: 5 },
        { id: "2", text: "Пост 2", likes: 10 },
        { id: "3", text: "Пост 3", likes: 2 },
        // ... Дополнительные посты
      ]
      setPosts((prevPosts) => [...prevPosts, ...newPosts])
      setIsLoading(false)
    }, 1500)
  }

  const handleScroll = () => {
    // Бесконечная прокрутка
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      fetchPosts()
    }
  }

  useEffect(() => {
    // Подписка на событие прокрутки при монтировании компонента
    window.addEventListener("scroll", handleScroll)
    return () => {
      // Отписка от события прокрутки при размонтировании компонента
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleLike = (postId: string) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) => {
        if (post.id === postId) {
          return { ...post, likes: post.likes + 1 }
        }
        return post
      })
    )
  }

  return (
    <div className="feed-container">
      {posts.map((post) => (
        <div key={post.id} className="post-container">
          <p>{post.text}</p>
          <button className="like-button" onClick={() => handleLike(post.id)}>
            <i
              className={`fas fa-heart ${post.likes > 0 ? "liked" : ""}`} // Используем класс "liked" для изменения цвета иконки
            ></i>
          </button>
          <span className="likes-count">{post.likes} Likes</span>
        </div>
      ))}
      {isLoading && <p>Loading...</p>}
    </div>
  )
}

export default Feed
