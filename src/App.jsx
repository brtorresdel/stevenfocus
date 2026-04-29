import './App.css'
import { Background } from './components/Background'
import { Header } from './components/Header'
import { Modal } from './components/Modal'
import { Timer } from './components/Timer'
import { ToDoList } from './components/ToDoList'
import { TaskAdd } from './components/TaskAdd'
import { TaskDescription } from './components/TaskDescription'

function App() {
  return (
    <Background>
      <Header />
      <div className='w-4/5 flex flex-col lg:w-full lg:justify-center lg:flex-row-reverse'>
        <Timer />
        <hr className='mt-10 text-base-white border-dashed w-auto text-center border-2 lg:hidden' />
        <ToDoList />
      </div>
      <Modal>
        <TaskAdd />
        <TaskDescription />
      </Modal>
    </Background>
  )
}

export default App
