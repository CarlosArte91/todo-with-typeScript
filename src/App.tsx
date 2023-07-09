import { useState } from 'react'
import Todos from './components/Todos'
import { type Todo, type TodoId } from './types'

const mockTodos = [
  {
    id: '1',
    title: 'See de midu Twitch',
    completed: false,
  },
  {
    id: '2',
    title: 'Learn React with typeScript',
    completed: false,
  },
  {
    id: '3',
    title: 'Exit the ticket of the midufest',
    completed: true,
  },
]

const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mockTodos)

  const handleRemove = ({ id }: TodoId): void => {
    const newTodos = todos.filter((todo) => todo.id !== id)
    setTodos(newTodos)
  }

  const handleToggle = ({ id, completed }: Pick<Todo, 'id' | 'completed'>): void => {
    const newTodos = [...todos.map((todo) => (todo.id === id ? {...todo, completed: completed} : todo))]
    setTodos(newTodos)
  }

  return (
    <Todos
      todos={todos}
      onRemoveTodo={handleRemove}
      onToggleCompleted={handleToggle}
    />
  )
}

export default App
