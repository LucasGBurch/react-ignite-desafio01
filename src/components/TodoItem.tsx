import { useState } from 'react';

import { Todo } from '../todo.model';

import { Trash } from 'phosphor-react';
import styles from './TodoItem.module.css';

interface TodoItemProps {
  item: Todo;
  onDeleteTodo: (id: string) => void
}

export function TodoItem({ item, onDeleteTodo }: TodoItemProps) {
  const [isCompleted, setIsCompleted] = useState(false);

  function handleCheckIsCompleted() {
    setIsCompleted((state) => !state);
  }

  function handleDeleteTodo() {
    onDeleteTodo(item.id);
  }

  const todoStatus = isCompleted ? 'items__textDone' : 'items__textNotDone'

  return (
    <li className={styles.items}>
      <div className={styles['items__custom-checkbox']}>
        <input
          checked={isCompleted}
          onClick={handleCheckIsCompleted}
          id='checkboxId'
          type='radio'
        />
        <label htmlFor='checkboxId' />
      </div>
      <div className={styles[todoStatus]}><span>Intis vel sed fames integer.</span></div>
      <button title='Deletar Tarefa' onClick={handleDeleteTodo}>
        <Trash size={24} />
      </button>
    </li>
  );
}
