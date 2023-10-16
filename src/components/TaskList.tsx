import styles from './TaskList.module.css'

import { Task } from '../App'
import { useState, MouseEvent } from 'react'

interface TaskListProps {
  taskList: Task[]
}

export function TaskList({ taskList }: TaskListProps) {
  const [tasks, setTasks] = useState<Task[]>(taskList)

  function handleTaskStatus(event: MouseEvent<HTMLButtonElement>) {
    const markTaskAsCompleted = event.currentTarget.value
    const updatedTasks = tasks.map((task) =>
      task.id !== markTaskAsCompleted ? task : { ...task, isComplete: true },
    )
    setTasks(updatedTasks)
  }

  return (
    <div className={styles.taskListContainer}>
      <div>
        <h2>Em Aberto</h2>
        <ul>
          {tasks.map(
            (task) =>
              !task.isComplete && (
                <li key={task.id} className={styles.task}>
                  {task.description}
                  <button
                    className={styles.completeTaskBtn}
                    value={task.id}
                    onClick={handleTaskStatus}
                  >
                    Marcar como Finalizada
                  </button>
                </li>
              ),
          )}
        </ul>
      </div>
      <div>
        <h2>Finalizadas</h2>
        <ul>
          {tasks.map(
            (task) =>
              task.isComplete && (
                <li key={task.id} className={styles.task}>
                  {task.description}
                </li>
              ),
          )}
        </ul>
      </div>
    </div>
  )
}
