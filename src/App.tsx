import { AddTaskBar } from './components/AddTaskBar'
import { Header } from './components/Header'

import './App.css'
import { useState } from 'react'
import { EmptyList } from './components/EmptyList'
import { TaskCounter } from './components/TaskCounter'
import { TaskList } from './components/TaskList'

export interface Task {
  id: string
  description: string
  isComplete: boolean
}

export default function App() {
  const [taskList, setTaskList] = useState<Task[]>([])

  function createNewTask(newTask: Task) {
    const newTaskList = [...taskList, newTask]
    setTaskList(newTaskList)
  }

  function markTaskAsCompleted(id: string) {
    const taskListDraft = [...taskList]
    const updatedTaskList = taskListDraft.map((task) =>
      task.id !== id ? task : { ...task, isComplete: true },
    )
    setTaskList(updatedTaskList)
  }

  return (
    <>
      <Header />
      <AddTaskBar onCreateNewTask={createNewTask} />
      <TaskCounter taskList={taskList} />

      {taskList.length > 0 ? (
        <TaskList
          taskList={taskList}
          onMarkTaskAsCompleted={markTaskAsCompleted}
        />
      ) : (
        <EmptyList />
      )}
    </>
  )
}
