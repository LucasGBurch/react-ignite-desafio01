import styles from './NewTodo.module.css'

export function NewTodo() {
  return (
    <form className={styles.form} action="submit">
      <input type="text" placeholder='Adicione uma nova tarefa' />
      <button>Criar</button>
    </form>
  )
}