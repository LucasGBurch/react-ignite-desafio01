import { Header } from './components/Header';
import { NewTodo } from './components/NewTodo';
import { TodoList } from './components/TodoList';

import styles from './App.module.css'
import './global.css';

function App() {
  return (
    <div>
      <Header />
      <div className={styles['todo__container']}>
        <NewTodo />
        <TodoList />
      </div>
    </div>
  )
}

export default App
