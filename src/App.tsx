import { Header } from './components/Header';
import { NewTodo } from './components/NewTodo';
import { TodoList } from './components/TodoList';

import './global.css';

function App() {
  return (
    <div>
      <Header />
      <NewTodo />
      <TodoList />
    </div>
  )
}

export default App
