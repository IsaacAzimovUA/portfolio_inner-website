import Container from './components/Container'
import About from './components/Pages/About'
import { Contacts } from './components/Pages/Contacts'
import Home from './components/Pages/Home'
import { Skills } from './components/Pages/Skills'

function App() {
  return (
    <Container>
      <Home />
      <About />
      <Skills />
      <Contacts />
    </Container>
  )
}

export default App
