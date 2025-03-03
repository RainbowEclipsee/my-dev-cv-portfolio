import { NavLink } from 'react-router-dom'
import './style.css'

interface ProjectProps {
  title: string
  img: string
  index: number
}

const Project: React.FC<ProjectProps> = ({ title, img, index }) => {
  return (
    <NavLink to={`/project/${index}`}>
      <li className="project">
        <img src={img} alt={title} className="project__img" />
        <h3 className="project__title">{title}</h3>
      </li>
    </NavLink>
  )
}

export default Project
