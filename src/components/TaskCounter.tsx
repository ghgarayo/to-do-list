import styles from './TaskCounter.module.css'

import { Task } from '../App'

interface TaskCounterProps {
  taskList: Task[]
}

export function TaskCounter({ taskList }: TaskCounterProps) {
  const openTasksCount = taskList.filter((task) => !task.isComplete).length
  const finishedTasksCount = taskList.filter((task) => task.isComplete).length

  return (
    <div className={styles.taskCounterContainer}>
      <p className={styles.createdTasks}>
        Tarefas criadas <span>{openTasksCount}</span>
      </p>
      <p className={styles.concludedTasks}>
        Tarefas concluídas{' '}
        <span>
          {finishedTasksCount} de {taskList.length}
        </span>
      </p>
    </div>
  )
}
