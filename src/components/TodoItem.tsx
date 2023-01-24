import { useState } from 'react';

import { Todo } from '../todo.model';

import { Trash } from 'phosphor-react';
import styles from './TodoItem.module.css';

interface TodoItemProps {
  item: Todo;
  onDeleteTodo: (id: string) => void;
  onUpdateTodo: (id: string, completed: boolean) => void;
}

export function TodoItem({ item, onDeleteTodo, onUpdateTodo }: TodoItemProps) {
  const [isCompleted, setIsCompleted] = useState(false);

  function handleCheckIsCompleted() {
    setIsCompleted((state) => !state);
    onUpdateTodo(item.id, isCompleted);
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
          onChange={handleCheckIsCompleted}
          id={item.id}
          type='checkbox'
        />
        <label htmlFor={item.id} />
      </div>
      <div className={styles[todoStatus]}><span>{item.title}</span></div>
      <button title='Deletar Tarefa' onClick={handleDeleteTodo}>
        <Trash size={24} />
      </button>
    </li>
  );
}

