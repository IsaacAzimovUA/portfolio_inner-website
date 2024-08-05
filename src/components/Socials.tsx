import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export const SOCIAL_ITEMS = [
  { id: 1, title: 'github', icon: faGithub, href: '#' },
  { id: 2, title: 'linkedin', icon: faLinkedin, href: '#' },
]
export const Socials = () => {
  return (
    <>
      <div className="contact">
        <a
          title="email"
          target="_blank"
          className="contact__email"
          href="mailto:dmytrohordus@gmail.com"
        >
          dmytrohordus@gmail.com
        </a>
        <ul className="contact__socials">
          {SOCIAL_ITEMS.map(({ id, title, icon, href }) => (
            <li key={id} title={title} className="contact__social-item">
              <a href={href} target="_blank">
                <FontAwesomeIcon className="icon" icon={icon} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
