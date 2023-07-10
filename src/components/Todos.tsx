import { type TodoId, type ListOfTodos, type Todo as TodoType } from '../types'
import Todo from './Todo'

interface TodosProps {
  todos: ListOfTodos
  onRemoveTodo: ({ id }: TodoId) => void
  onToggleCompleted: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
}

export default function Todos({ todos, onRemoveTodo, onToggleCompleted }: TodosProps) {
  return (
    <ul className='todos-list'>
      {todos.map((todo) => (
        <li key={todo.id}>
          <Todo
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            onRemoveTodo={onRemoveTodo}
            onToggleCompleted={onToggleCompleted}
          />
        </li>
      ))}
    </ul>
  )
}
