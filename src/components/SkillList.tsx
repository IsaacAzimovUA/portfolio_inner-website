import { createElement } from 'react'
import { IconType } from 'react-icons'

type Skill = {
  id: number
  name: string
  icon: IconType
}

type SkillListProps = {
  skillList: Skill[]
  title: string
}

const SkillList: React.FC<SkillListProps> = ({ skillList, title }) => {
  return (
    <>
      <h3 className="title title--3">{title.toUpperCase()}</h3>
      <ul className="skill">
        {skillList.map(({ id, name, icon }) => (
          <li key={id} className="skill__item">
            {createElement(icon, { className: 'skill__icon' })}
            <span className="skill__name">{name.toUpperCase()}</span>
          </li>
        ))}
      </ul>
    </>
  )
}

export default SkillList
