import todoClipboard from '../assets/todoClipboard.svg';
import { TodoItem } from './TodoItem';

import styles from './TodoList.module.css';

export function TodoList() {
  const noItemsContent = (
    <div className={styles['todo__empty']}>
      <img
        src={todoClipboard}
        alt='Ícone de lista para quando a lista está vazia'
        className={styles['todo__empty--image']}
      />
      <div>
        <p className={styles['todo__empty--text']}>
          <strong>Você ainda não tem tarefas cadastradas</strong>
        </p>
        <p className={styles['todo__empty--text']}>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  );

  const listContent = (
    <ul className={styles['todo__list']}>
      <TodoItem />
    </ul>
  );

  const content = true ? listContent : noItemsContent;

  return (
    <div className={styles.container}>
      <section className={styles['todo__info']}>
        <div className={styles.todoCreated}>
          <span className={styles['todoCreated__text']}>Tarefas Criadas</span>
          <span className={styles['todo__numbers']}>0</span>
        </div>
        <div className={styles.todoConcluded}>
          <span className={styles['todoConcluded__text']}>
            Concluídas
          </span>
          <span className={styles['todo__numbers']}>0</span>
        </div>
      </section>
      {content}
    </div>
  );
}
