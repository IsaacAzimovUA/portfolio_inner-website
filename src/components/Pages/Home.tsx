import { TypeAnimation } from 'react-type-animation'
import Navbar from '../Navbar'

const Home = () => {
  return (
    <>
      <Navbar />
      <header className="wrapper">
        <TypeAnimation
          preRenderFirstString={false}
          cursor={false}
          wrapper="h1"
          sequence={['>  Hey there! 👋']}
          speed={20}
          className="title title--1"
          style={{
            fontFamily: 'fonts/JetBrainsMono_Regular.ttf',
          }}
        />
      </header>
    </>
  )
}

export default Home
