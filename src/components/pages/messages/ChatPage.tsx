import React, { useState } from "react"
import "./chatPage.css"

// Тип для представления сообщения
type Message = {
  id: number
  text: string
  sender: string
}

// Тип для представления переписки
type Chat = {
  id: number
  messages: Message[]
}

const MessageList: React.FC<{ chat: Chat }> = ({ chat }) => {
  const [newMessage, setNewMessage] = useState("")
  const { messages } = chat

  const handleSendMessage = () => {
    // Отправка сообщения
    const newMessageObj: Message = {
      id: messages.length + 1,
      text: newMessage,
      sender: "user1", // Замените на актуальное имя отправителя
    }

    // Обновление списка сообщений
    const updatedMessages = [...messages, newMessageObj]
    const updatedChat = { ...chat, messages: updatedMessages }
    // Ваш код для обновления переписки

    // Очистка поля ввода
    setNewMessage("")
  }

  return (
    <div className="message-list">
      {messages.map((message) => (
        <div
          className={`message ${
            message.sender === "user1" ? "sent" : "received"
          }`}
          key={message.id}>
          {message.text}
        </div>
      ))}
      <div className="message-input">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={handleSendMessage}>Отправить</button>
      </div>
    </div>
  )
}

const ChatPage: React.FC = () => {
  const initialChats: Chat[] = [
    {
      id: 1,
      messages: [
        { id: 1, text: "Привет!", sender: "user1" },
        { id: 2, text: "Привет! Как дела?", sender: "user2" },
      ],
    },
    {
      id: 2,
      messages: [
        { id: 1, text: "Здравствуйте!", sender: "user1" },
        { id: 2, text: "Как могу помочь?", sender: "user1" },
      ],
    },
  ]

  const [chats, setChats] = useState(initialChats)

  return (
    <div className="chat-page">
      {chats.map((chat) => (
        <MessageList key={chat.id} chat={chat} />
      ))}
    </div>
  )
}

export default ChatPage
