import './App.css'
import { Background } from './components/Background'
import { Header } from './components/Header'
import { Timer } from './components/Timer'
import { ToDoList } from './components/ToDoList'

function App() {

  return (
    <Background>
      <Header />
      <div>
        <Timer />
        <hr className='mt-10 text-base-white border-dashed w-auto text-center border-2 lg:hidden'/>
        <ToDoList />
      </div>
    </Background>
  )
}

export default App
