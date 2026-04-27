import './App.css'
import { Background } from './components/Background'
import { Header } from './components/Header'
import { Timer } from './components/Timer'

function App() {

  return (
    <Background>
      <Header />
      <div>
        <Timer />
      </div>
    </Background>
  )
}

export default App
