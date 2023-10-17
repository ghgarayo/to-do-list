import styles from './TaskList.module.css'

import { Task } from '../App'
import { CheckCircle } from 'phosphor-react'

interface TaskListProps {
  taskList: Task[]
  onMarkTaskAsCompleted: (id: string) => void
}

export function TaskList({ taskList, onMarkTaskAsCompleted }: TaskListProps) {
  return (
    <div className={styles.taskListContainer}>
      <h2>Em Aberto</h2>
      <ul>
        {taskList.map(
          (task) =>
            !task.isComplete && (
              <li key={task.id} className={styles.openTask}>
                <p className={styles.taskDescription}>{task.description}</p>
                <button
                  className={styles.completeTaskBtn}
                  value={task.id}
                  onClick={() => onMarkTaskAsCompleted(task.id)}
                >
                  <CheckCircle
                    size={32}
                    weight="fill"
                    fill="var(--red-700)"
                    alt="Marcar como concluída"
                  />
                </button>
              </li>
            ),
        )}
      </ul>
      <span></span>
      <h2>Finalizadas</h2>
      <ul>
        {taskList.map(
          (task) =>
            task.isComplete && (
              <li key={task.id} className={styles.completedTask}>
                <p className={styles.taskDescription}>{task.description}</p>
              </li>
            ),
        )}
      </ul>
    </div>
  )
}
