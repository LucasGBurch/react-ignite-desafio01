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

  return (
    <div className={styles.items}>
      <input
        defaultChecked={isCompleted}
        onClick={handleCheckIsCompleted}
        id='checkboxId'
        type='radio'
      />
      <label htmlFor='checkboxId' />
      <li>Item de teste</li>
      <button title='Deletar Tarefa'>
        <Trash size={24} />
      </button>
    </div>
  );
}
