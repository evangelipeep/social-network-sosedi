import React, { useState } from "react"
import "./messages.css"

interface Message {
  id: string
  sender: string
  content: string
}

interface Chat {
  id: string
  messages: Message[]
}

interface Props {
  chats: Chat[]
}

const Messages: React.FC<Props> = ({ chats }) => {
  const [selectedChat, setSelectedChat] = useState<Chat | null>(null)
  const [messageInput, setMessageInput] = useState("")

  const handleChatClick = (chat: Chat) => {
    setSelectedChat(chat)
  }

  const handleMessageSend = () => {
    if (!selectedChat) return
    const newMessage: Message = {
      id: String(selectedChat.messages.length + 1),
      sender: "You", // Здесь можно использовать имя текущего пользователя
      content: messageInput,
    }
    const updatedChat: Chat = {
      ...selectedChat,
      messages: [...selectedChat.messages, newMessage],
    }
    // Обновляем переписку с новым сообщением
    // Допустим, у вас есть функция для обновления чата в хранилище или отправки на сервер
    // updateChat(updatedChat);
    setSelectedChat(updatedChat)
    setMessageInput("")
  }

  return (
    <div className="messenger-page">
      <div className="chat-list">
        {chats.map((chat) => (
          <div
            key={chat.id}
            className={`chat-item ${selectedChat === chat ? "active" : ""}`}
            onClick={() => handleChatClick(chat)}>
            <div className="chat-item-avatar">
              {/* Иконка пользователя или аватар чата */}
            </div>
            <div className="chat-item-details">
              <div className="chat-item-title">
                {/* Название пользователя или название чата */}
              </div>
              <div className="chat-item-last-message">
                {/* Последнее сообщение в чате */}
              </div>
            </div>
          </div>
        ))}
      </div>
      {selectedChat && (
        <div className="chat-view">
          <div className="chat-header">
            <div className="chat-header-avatar">
              {/* Иконка пользователя или аватар чата */}
            </div>
            <div className="chat-header-title">
              {/* Название пользователя или название чата */}
            </div>
          </div>
          <div className="chat-messages">
            {selectedChat.messages.map((message) => (
              <div
                key={message.id}
                className={`message ${
                  message.sender === "You" ? "sent" : "received"
                }`}>
                <div className="message-content">{message.content}</div>
              </div>
            ))}
          </div>
          <div className="message-input">
            <input
              type="text"
              placeholder="Напишите сообщение..."
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
            />
            <button onClick={handleMessageSend}>Отправить</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Messages
