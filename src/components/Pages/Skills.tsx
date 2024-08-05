import { faNode } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SKILL_ITEMS = {
  frontend: [
    { id: 1, name: 'foo', icon: faNode },
    { id: 2, name: 'foo', icon: faNode },
    { id: 3, name: 'foo', icon: faNode },
    { id: 4, name: 'foo', icon: faNode },
  ],
  backend: [
    { id: 1, name: 'foo', icon: faNode },
    { id: 2, name: 'foo', icon: faNode },
    { id: 3, name: 'foo', icon: faNode },
    { id: 4, name: 'foo', icon: faNode },
  ],
}

export const Skills = () => {
  return (
    <div className="wrapper" id="skills">
      <h2 className="title title--2">My Skills</h2>

      <p className="text">
        &gt; I also enjoy creating immersive 3D effects with Three.js, Fiber,
        Spring, and Drei 🎮. When I’m not coding, you’ll find me strumming my
        ukulele 🎶, exploring new tech 🔍, or diving into a good book 📚. Let’s
        build something awesome together!'
      </p>
      <h3 className="title title--3">Front End</h3>
      <ul className="skill">
        {SKILL_ITEMS.frontend.map(({ id, name, icon }) => (
          <li key={id} className="skill__item">
            <FontAwesomeIcon className="skill__icon" icon={icon} />
            <span className="skill__name">{name}</span>
          </li>
        ))}
      </ul>
      <h3 className="title title--3">Backend</h3>
      <ul className="skill">
        {SKILL_ITEMS.backend.map(({ id, name, icon }) => (
          <li key={id} className="skill__item">
            <FontAwesomeIcon className="skill__icon" icon={icon} />
            <span className="skill__name">{name}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
