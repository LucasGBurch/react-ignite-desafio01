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
  const [todosCompleted, setTodosCompleted] = useState<number>(0);
  // Quantidade das completas para passar como propriedade de apresentação da lista;

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
          completed: false,
        });

        return updatedTodos;
      });
    } else if (todoExists(text)) {
      alert('Essa tarefa já existe. Tente digitar outra.');
    } else if (!todoIsValid(text)) {
      alert('Tarefa deve ter pelo menos 3 caracteres.');
    }
  }

  function handleDeleteTodo(todoId: string) {
    const todoWithoutDeletedOne = todos.filter((todo) => {
      return todo.id !== todoId;
    });

    const todoToBeDeleted = todos.filter((todo) => {
      return todo.id === todoId;
    });

    // Tinha que diminuir uma do estado das completas aqui em deletar também!
    // Mas só se estiver completa!
    if (todoToBeDeleted[0].completed) {
      setTodosCompleted((prevState) => {
        return prevState - 1;
      });
    }

    setTodos(todoWithoutDeletedOne);
  }

  function handleUpdateTodo(todoId: string, completed: boolean) {
    const updatedTodo = todos.filter((todo) => {
      return todo.id === todoId;
    });
    // Testando a lógica:
    // console.log('antes:' + updatedTodo[0].completed)
    updatedTodo[0].completed = !completed;
    // console.log('depois:' + updatedTodo[0].completed)

    if (updatedTodo[0].completed) {
      setTodosCompleted((prevState) => {
        return prevState + 1;
      });
    } else {
      setTodosCompleted((prevState) => {
        return prevState - 1;
      });
    }

    // Teste da lógica
    // console.log(todosCompleted);
  }

  return (
    <div>
      <Header />
      <div className={styles['todo__container']}>
        <NewTodo createTodo={handleAddTodo} />
        <TodoList
          deleteTodo={handleDeleteTodo}
          updateTodo={handleUpdateTodo}
          completedTodos={todosCompleted}
          items={todos}
        />
      </div>
    </div>
  );
}

export default App;
