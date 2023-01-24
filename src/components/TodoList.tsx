import todoClipboard from '../assets/todoClipboard.svg';
import { Todo } from '../todo.model';
import { TodoItem } from './TodoItem';

import styles from './TodoList.module.css';

interface TodoListProps {
  items: Todo[];
  completedTodos: number;
  deleteTodo: (id: string) => void;
  updateTodo: (id: string, concluded: boolean) => void;
}

export function TodoList({ items, completedTodos, deleteTodo, updateTodo }: TodoListProps) {
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
        <p className={styles['todo__empty--text']}>
          Crie tarefas e organize seus itens a fazer
        </p>
      </div>
    </div>
  );

  const listContent = (
    <ul className={styles['todo__list']}>
      {items.map((todo) => (
        <TodoItem
          item={todo}
          key={todo.id}
          onDeleteTodo={deleteTodo}
          onUpdateTodo={updateTodo}
        />
      ))}
    </ul>
  );

  const todosTotalNumber = items.length;
  const temTodo = todosTotalNumber > 0;

  const content = temTodo ? listContent : noItemsContent;
  const lineEmpty = temTodo ? 'todo__infoList' : 'todo__infoEmpty';

  const completedTodosField = temTodo
    ? `${completedTodos} de ${todosTotalNumber}`
    : todosTotalNumber;

  return (
    <div className={styles.container}>
      <section className={styles[lineEmpty]}>
        <div className={styles.todoCreated}>
          <span className={styles['todoCreated__text']}>Tarefas Criadas</span>
          <span className={styles['todo__numbers']}>{todosTotalNumber}</span>
        </div>
        <div className={styles.todoConcluded}>
          <span className={styles['todoConcluded__text']}>Concluídas</span>
          <span className={styles['todo__numbers']}>{completedTodosField}</span>
        </div>
      </section>
      {content}
    </div>
  );
}
