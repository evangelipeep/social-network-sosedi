import React from "react"
import { FaGithub } from "react-icons/fa"

const Footer: React.FC = () => {
  const [hovered, setHovered] = React.useState(false)

  const handleMouseEnter = () => {
    setHovered(true)
  }

  const handleMouseLeave = () => {
    setHovered(false)
  }

  const iconOpacity = hovered ? 0.8 : 1

  return (
    <footer
      style={{
        backgroundColor: "#ffe082",
        padding: "20px",
        textAlign: "center",
      }}>
      <a
        href="https://github.com/evangelipeep"
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          textDecoration: "none",
          color: "#000",
          display: "inline-block",
          opacity: iconOpacity,
        }}>
        <FaGithub size={24} style={{ verticalAlign: "middle" }} />
        <span style={{ marginLeft: "5px", verticalAlign: "middle" }}>
          GitHub
        </span>
      </a>
    </footer>
  )
}

export default Footer
