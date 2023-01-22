import { Trash } from 'phosphor-react';
import { useState } from 'react';

import styles from './TodoItem.module.css';

/** para o input:
   defaultChecked = {todo.isCompleted}
    onChange={handleCheckCompletedTodo}
    id={`checkbox${todo.id}`}
        */
export function TodoItem() {
  const [isCompleted, setIsCompleted] = useState(false);

  function handleCheckIsCompleted() {
    setIsCompleted((state) => !state);
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
      <button title='Deletar Tarefa'>
        <Trash size={24} />
      </button>
    </li>
  );
}
