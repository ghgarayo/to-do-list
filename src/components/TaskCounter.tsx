import styles from './TaskCounter.module.css'

import { Task } from '../App'

interface TaskCounterProps {
  taskList: Task[]
}

export function TaskCounter({ taskList }: TaskCounterProps) {
  const openTasksCount = taskList.length
  const completedTaskCount = taskList.filter((task) => task.isComplete).length

  return (
    <div className={styles.taskCounterContainer}>
      <p className={styles.createdTasks}>
        Tarefas criadas <span>{openTasksCount}</span>
      </p>
      <p className={styles.concludedTasks}>
        Tarefas concluídas{' '}
        <span>
          {completedTaskCount} de {taskList.length}
        </span>
      </p>
    </div>
  )
}
