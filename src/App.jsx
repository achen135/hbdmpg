import './App.css'
import Home from './Pages/Home/Home'
import Intro from './Pages/Intro/Intro'
import Stats from './Pages/Stats/Stats'
import Game from './Pages/Game/Game'
import Letter from './Pages/Letter/Letter'

function App() {

  return (
    <>
    <section id="home">
      <Home/>
    </section>
      
    <section id="intro">
      <Intro/>
    </section>
    
    <section id="stats">
      <Stats/>
    </section>

    <section id="game">
      <Game/>
    </section>
    
    <section id="letter">
      <Letter/>
    </section>    
    </>
  )
}

export default App
