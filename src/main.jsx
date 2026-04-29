import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './context/ThemeContext'
import { TasksProvider } from './context/TasksContext/index.jsx'
import { ModalProvider } from './context/ModalContext/index.jsx'

createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <TasksProvider>
      <ModalProvider>
        <App />
      </ModalProvider>
    </TasksProvider>
  </ThemeProvider>,
)
