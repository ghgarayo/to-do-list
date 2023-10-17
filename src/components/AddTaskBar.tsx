import styles from './AddTaskBar.module.css'

import { v4 as uuidv4 } from 'uuid'

import { PlusCircle } from 'phosphor-react'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'
import { Task } from '../App'

interface AddTaskBarProps {
  onCreateNewTask: (newTask: Task) => void
}

export function AddTaskBar({ onCreateNewTask }: AddTaskBarProps) {
  const [taskDescription, setTaskDescription] = useState('')

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()

    const newTask = {
      id: uuidv4(),
      description: taskDescription,
      isComplete: false,
    }

    onCreateNewTask(newTask)
    setTaskDescription('')
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('')
    setTaskDescription(event.currentTarget.value)
  }

  function handleNewTaskValidation(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Não é possível adicionar uma tarefa vazia.')
  }

  return (
    <form className={styles.addTaskBar} onSubmit={handleCreateNewTask}>
      <input
        type="text"
        placeholder="Adicionar uma nova tarefa"
        onChange={handleNewTaskChange}
        value={taskDescription}
        onInvalid={handleNewTaskValidation}
      />
      <button
        className={styles.submitBtn}
        type="submit"
        disabled={!taskDescription}
      >
        <PlusCircle size={32} />
      </button>
    </form>
  )
}
