import React, { useState } from "react"
import "./login.css"
import { Link } from "react-router-dom"

const Login: React.FC = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value)
  }

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    // Handle form submission (login or registration)
    // ...
  }

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Авторизация</h2>
        <div className="form-group">
          <label htmlFor="username">Имя пользователя</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Пароль</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit" className="submit-button">
          Отправить
        </button>
        <div className="register-link">
          <Link to="register">Зарегистрироваться</Link>
        </div>
      </form>
    </div>
  )
}

export default Login
