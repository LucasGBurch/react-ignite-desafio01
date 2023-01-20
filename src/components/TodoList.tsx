import { TodoItem } from "./TodoItem";

import styles from './TodoList.module.css';

export function TodoList() {
  return (
    <ul className={styles.list}>
      <TodoItem />
    </ul>
  )
}
