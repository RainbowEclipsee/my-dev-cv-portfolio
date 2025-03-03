import { NavLink } from 'react-router-dom'
import BtnDarkMode from '../btnDarkMode/BtnDarkMode'

import './style.css'

const Navbar: React.FC = () => {
  const activeLink: string = 'nav-list__link nav-list__link--active'
  const defaultLink: string = 'nav-list__link'

  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-row">
          <NavLink to="/" className="logo">
            <strong>Freelancer</strong> portfolio
          </NavLink>

          <BtnDarkMode />

          <ul className="nav-list">
            <li className="nav-list__item">
              <NavLink
                to="/"
                className={({ isActive }: { isActive: boolean }) =>
                  isActive ? activeLink : defaultLink
                }
              >
                Home
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink
                to="/projects"
                className={({ isActive }: { isActive: boolean }) =>
                  isActive ? activeLink : defaultLink
                }
              >
                Projects
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink
                to="/contacts"
                className={({ isActive }: { isActive: boolean }) =>
                  isActive ? activeLink : defaultLink
                }
              >
                Contacts
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
