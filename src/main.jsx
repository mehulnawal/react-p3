import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import TaskTable from './TaskTable'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TaskTable />
  </StrictMode>,
)
