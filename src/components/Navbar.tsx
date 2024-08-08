import { Twirl as Hamburger } from 'hamburger-react'
import { useState } from 'react'
import { Socials } from './Socials'

const MENU_ITEMS = [
  { id: 1, name: 'home', href: '#' },
  { id: 2, name: 'about', href: '#about' },
  { id: 3, name: 'skills', href: '#skills' },
  { id: 4, name: 'contact', href: '#contacts' },
]

export const Navbar = () => {
  const [isOpen, setOpen] = useState(false)
  return (
    <nav className="navbar">
      <ul className="navbar__wrapper">
        <li className="navbar__item">
          <Hamburger
            label="menu"
            toggled={isOpen}
            toggle={setOpen}
            color={isOpen ? '#000' : '#fff'}
          />
        </li>
      </ul>
      {isOpen && (
        <div onClick={() => setOpen(!isOpen)} className="navbar__menu">
          <div
            onClick={(e) => e.stopPropagation()}
            className="navbar__menu-wrapper"
          >
            <ul>
              {MENU_ITEMS.map((item) => (
                <li className="navbar__menu-item" key={item.id}>
                  <a
                    onClick={() => {
                      setOpen(!isOpen)
                    }}
                    href={item.href}
                  >
                    {item.name.toUpperCase()}
                  </a>
                </li>
              ))}
            </ul>
            <div className="navbar__menu-contact">
              <Socials />
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
