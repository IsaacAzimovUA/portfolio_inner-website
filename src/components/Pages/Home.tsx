import Navbar from '../Navbar'

const Home = () => {
  return (
    <>
      <Navbar />
      <header className="wrapper">
        <h1 className="title title--1">
          Hey there! 👋<span className="blink">|</span>
        </h1>
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
              'I’m a full-stack developer',
            ]}
            speed={80}
            style={{
              fontSize: '1.5rem',
              textAlign: 'center',
              fontFamily: 'fonts/JetBrainsMono_Regular.ttf',
            }}
          /> */}
        {/* <p className="text">
            I’m a full-stack developer who loves crafting dynamic web
            experiences. From sleek interfaces with TailWind CSS 🎨 to seamless
            state management with React and Redux Toolkit ⚛️, I’m all about
            making the web engaging and fun.
          </p> */}
      </header>
    </>
  )
}

export default Home
