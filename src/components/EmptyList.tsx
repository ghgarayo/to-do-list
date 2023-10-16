import { ListNumbers } from 'phosphor-react'
import styles from './EmptyList.module.css'

export function EmptyList() {
  return (
    <div className={styles.emptyList}>
      <ListNumbers size={128} />

      <p className={styles.title}>Você ainda não tem tarefas cadastradas!</p>
      <p className={styles.subtitle}>Crie tarefas e organize seu dia!</p>
    </div>
  )
}
