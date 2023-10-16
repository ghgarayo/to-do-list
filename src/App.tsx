import { AddTaskBar } from './components/AddTaskBar'
import { Header } from './components/Header'

import './App.css'
import { useState } from 'react'
import { EmptyList } from './components/EmptyList'
import { TaskCounter } from './components/TaskCounter'

export interface Task {
  id: number
  description: string
  isComplete: boolean
}

export default function App() {
  const [taskList, setTaskList] = useState<Task[]>([])

  function createNewTask(newTask: Task) {
    setTaskList([...taskList, newTask])
  }

  return (
    <>
      <Header />
      <AddTaskBar onCreateNewTask={createNewTask} />
      <TaskCounter taskList={taskList} />

      {taskList.length > 0 ? (
        <div>
          <p>Existem {taskList.length} tarefas na lista:</p>
          <ul>
            {taskList.map((task) => (
              <li key={task.id}>{task.description}</li>
            ))}
          </ul>
        </div>
      ) : (
        <EmptyList />
      )}
    </>
  )
}
