import { useState } from 'react';

import { Header } from './components/Header';
import { NewTodo } from './components/NewTodo';
import { TodoList } from './components/TodoList';

import { Todo } from './todo.model';
import { v4 as uuidv4 } from 'uuid';

import styles from './App.module.css';
import './global.css';

function App() {
  // Hooks:
  const [todos, setTodos] = useState<Todo[]>([]);

  // Validações:
  function todoExists(text: string) {
    return todos.find((todo) => todo.title === text);
  }

  function todoIsValid(text: string) {
    return text.length > 2;
  }

  function handleAddTodo(text: string) {
    const todoIsNewAndValid = !todoExists(text) && todoIsValid(text);

    if (todoIsNewAndValid) {
      setTodos((prevTodos) => {
        const updatedTodos = [...prevTodos];

        updatedTodos.unshift({
          id: uuidv4(),
          title: text,
          concluded: false,
        });

        return updatedTodos;
      });
    } else if (todoExists(text)) {
      alert('Essa tarefa já existe. Tente digitar outra.');
    } else if  (todoIsValid(text)) {
      alert('Tarefa deve ter pelo menos 3 caracteres.');
    }
  }

  function handleDeleteTodo(todoId: string) {
    const todoWithoutDeletedOne = todos.filter((todo) => {
      return todo.id !== todoId;
    });

    setTodos(todoWithoutDeletedOne);
  }

  return (
    <div>
      <Header />
      <div className={styles['todo__container']}>
        <NewTodo createTodo={handleAddTodo} />
        <TodoList deleteTodo={handleDeleteTodo} items={todos} />
      </div>
    </div>
  );
}

export default App;
