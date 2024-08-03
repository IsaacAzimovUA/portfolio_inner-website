import { Twirl as Hamburger } from 'hamburger-react'
import { useState } from 'react'
import { Contacts } from './Contacts'
const MENU_ITEMS = [
  { id: 1, name: 'home', href: '#' },
  { id: 2, name: 'projects', href: '#' },
  { id: 3, name: 'about', href: '#' },
  { id: 4, name: 'home', href: '#' },
]

export const Navbar = () => {
  const [isOpen, setOpen] = useState(false)
  return (
    <nav className="navbar">
      <ul className="navbar__wrapper">
        <li className="navbar__item">
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            color={isOpen ? '#000' : '#fff'}
          />
        </li>
      </ul>
      <div
        className={
          isOpen ? 'navbar__menu navbar__menu--active' : 'navbar__menu'
        }
      >
        {isOpen && (
          <div className="navbar__menu-wrapper">
            <ul>
              {MENU_ITEMS.map((item) => (
                <li className="navbar__menu-item" key={item.id}>
                  <a onClick={() => setOpen(!isOpen)} href={item.href}>
                    {item.name.toUpperCase()}
                  </a>
                </li>
              ))}
            </ul>
            <div className="navbar__menu-contact">
              <Contacts />
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
