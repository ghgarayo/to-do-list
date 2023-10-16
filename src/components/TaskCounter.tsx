import { Task } from '../App'
import styles from './TaskCounter.module.css'

interface TaskCounterProps {
  taskList: Task[]
}

export function TaskCounter({ taskList }: TaskCounterProps) {
  return (
    <div className={styles.taskCounterContainer}>
      <p className={styles.createdTasks}>
        Tarefas criadas <span>{taskList.length}</span>
      </p>
      <p className={styles.concludedTasks}>
        Tarefas concluídas <span>0 de {taskList.length}</span>
      </p>
    </div>
  )
}
