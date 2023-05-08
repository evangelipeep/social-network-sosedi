import React, { useState } from "react"
import "./register.css"
import { Link } from "react-router-dom"

const Register: React.FC = () => {
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
    // Handle form submission (registration)
    // ...
  }

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Регистрация</h2>
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
        <div className="login-link">
          <Link to="/">Есть уже аккаунт?</Link>
        </div>
      </form>
    </div>
  )
}

export default Register
