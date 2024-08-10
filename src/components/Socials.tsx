import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const { VITE_LINK_GITHUB, VITE_LINK_LINKEDIN } = import.meta.env
const LINK_EMAIL = import.meta.env.VITE_LINK_EMAIL
export const SOCIAL_ITEMS = [
  {
    id: 1,
    title: 'github',
    icon: faGithub,
    href: VITE_LINK_GITHUB,
  },
  { id: 2, title: 'linkedin', icon: faLinkedin, href: VITE_LINK_LINKEDIN },
]
export const Socials = () => {
  return (
    <>
      <div className="contact">
        <a
          title="email"
          target="_blank"
          className="contact__email"
          href={`mailto:${LINK_EMAIL}`}
        >
          {LINK_EMAIL}
        </a>
        <ul className="contact__socials">
          {SOCIAL_ITEMS.map(({ id, title, icon, href }) => (
            <li key={id} title={title} className="contact__social-item">
              <a href={href} target="_blank" aria-label={title}>
                <FontAwesomeIcon className="icon" icon={icon} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
