import {
  SiBlender,
  SiDocker,
  SiExpress,
  SiFigma,
  SiGit,
  SiGithub,
  SiGnubash,
  SiJavascript,
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiPhp,
  SiReact,
  SiRedux,
  SiSass,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVim,
  SiVisualstudiocode,
} from 'react-icons/si'
import SkillList from '../SkillList'
const SKILL_ITEMS = {
  frontend: [
    { id: 1, name: 'javascript', icon: SiJavascript },
    { id: 2, name: 'typescript', icon: SiTypescript },
    { id: 3, name: 'react', icon: SiReact },
    { id: 4, name: 'redux', icon: SiRedux },
    { id: 5, name: 'sass', icon: SiSass },
    { id: 6, name: 'tailwind', icon: SiTailwindcss },
    { id: 7, name: 'three.js', icon: SiThreedotjs },
  ],
  backend: [
    { id: 1, name: 'node.js', icon: SiNodedotjs },
    { id: 2, name: 'express', icon: SiExpress },
    { id: 3, name: 'php', icon: SiPhp },
    { id: 4, name: 'laravel', icon: SiLaravel },
    { id: 5, name: 'mysql', icon: SiMysql },
    { id: 6, name: 'mongodb', icon: SiMongodb },
  ],
  utilities: [
    { id: 1, name: 'vscode', icon: SiVisualstudiocode },
    { id: 2, name: 'git', icon: SiGit },
    { id: 3, name: 'github', icon: SiGithub },
    { id: 4, name: 'bash', icon: SiGnubash },
    { id: 5, name: 'vim', icon: SiVim },
    { id: 6, name: 'docker', icon: SiDocker },
    { id: 7, name: 'figma', icon: SiFigma },
    { id: 8, name: 'blender3d', icon: SiBlender },
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
        build something awesome together<span className="blink">|</span>
      </p>
      <SkillList skillList={SKILL_ITEMS.frontend} title={'frontend'} />
      <SkillList skillList={SKILL_ITEMS.backend} title={'backend'} />
      <SkillList skillList={SKILL_ITEMS.utilities} title={'utilities'} />
    </div>
  )
}
