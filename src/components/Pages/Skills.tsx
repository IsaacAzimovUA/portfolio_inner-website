import { faNode } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SKILL_ITEMS = [{ id: 1, name: ' foo', icon: faNode }]

export const Skills = () => {
  return (
    <div className="wrapper" id="skills">
      <h2 className="title--2">My Skills</h2>

      <p className="text">
        &gt; I also enjoy creating immersive 3D effects with Three.js, Fiber,
        Spring, and Drei 🎮. When I’m not coding, you’ll find me strumming my
        ukulele 🎶, exploring new tech 🔍, or diving into a good book 📚. Let’s
        build something awesome together!'
      </p>
      <ul>
        {SKILL_ITEMS.map(({ id, name, icon }) => (
          <li key={id}>
            <FontAwesomeIcon icon={icon} />
            <span>{name}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
