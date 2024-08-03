// import { TypeAnimation } from 'react-type-animation'
import { Navbar } from './components/Navbar'
function App() {
  return (
    <div className="container">
      <div className="container__child">
        <Navbar />
        <div className="wrapper">
          <h1 className="title--1">Hey there! 👋</h1>
          {/* <TypeAnimation
            preRenderFirstString={true}
            wrapper="p"
            sequence={[
              '> I’m a ',
              1000,
              '> I’m a front-end developer',
              1000,
              '> I’m a back-end developer',
              1000,
              '> I’m a full-stack developer',
            ]}
            speed={80}
            style={{
              fontSize: '1.5rem',
              textAlign: 'center',
              fontFamily: 'fonts/JetBrainsMono_Regular.ttf',
            }}
          /> */}
          <p className="text">
            I’m a full-stack developer who loves crafting dynamic web
            experiences. From sleek interfaces with TailWind CSS 🎨 to seamless
            state management with React and Redux Toolkit ⚛️, I’m all about
            making the web engaging and fun.'
          </p>
        </div>
      </div>
      <div className="container__child">
        <div className="wrapper">
          <p className="text">
            &gt; I also enjoy creating immersive 3D effects with Three.js,
            Fiber, Spring, and Drei 🎮. When I’m not coding, you’ll find me
            strumming my ukulele 🎶, exploring new tech 🔍, or diving into a
            good book 📚. Let’s build something awesome together!'
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
