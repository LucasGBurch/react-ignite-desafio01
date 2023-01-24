import { ChangeEvent, FormEvent, useState } from 'react';

import { PlusCircle } from 'phosphor-react';
import styles from './NewTodo.module.css';

interface NewTodoProps {
  createTodo: (text: string) => void;
}

export function NewTodo({ createTodo }: NewTodoProps) {
  const [todoText, setTodoText] = useState<string>('');

  function handleTodoTyping(event: ChangeEvent<HTMLInputElement>) {
    setTodoText(event.target.value);
  }

  function handleCreateTodo(event: FormEvent) {
    event.preventDefault();

    createTodo(todoText);

    setTodoText('');
  }

  return (
    <form onSubmit={handleCreateTodo} className={styles.form} action='submit'>
      <input
        type='text'
        placeholder='Adicione uma nova tarefa'
        value={todoText}
        onChange={handleTodoTyping}
        required
      />
      <button type='submit'>
        Criar <PlusCircle size={20} />
      </button>
    </form>
  );
}
