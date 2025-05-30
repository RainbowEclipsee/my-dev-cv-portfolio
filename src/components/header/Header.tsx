import cvFile from '../../assets/Makarchuk Bogdan.pdf'
import './style.css'

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__wrapper border">
        <h1 className="header__title">
          <strong>
            Hi, my name is <em>Bogdan</em>
          </strong>
          <br />a frontend developer
        </h1>
        <div className="header__text">
          <p>with passion for learning and creating.</p>
        </div>
        <a href={cvFile} className="btn">
          Download CV
        </a>
      </div>
    </header>
  )
}

export default Header
