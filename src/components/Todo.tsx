import { type Todo, type TodoId } from '../types'

import { FaRegTrashAlt } from 'react-icons/fa'

interface TodoProps extends Todo {
  onRemoveTodo: ({ id }: TodoId) => void
  onToggleCompleted: ({ id, completed }: Pick<Todo, 'id' | 'completed'>) => void
}

export default function Todo({ id, title, completed, onRemoveTodo, onToggleCompleted }: TodoProps) {
  const handleRemove = (): void => {
    onRemoveTodo({ id })
  }

  const handleToggleCompleted = (event: React.ChangeEvent<HTMLInputElement>): void => {
    onToggleCompleted({ id, completed: event.target.checked })
  }

  return (
    <div className='todo-item'>
      <input
        className='toggle'
        type='checkbox'
        checked={completed}
        onChange={handleToggleCompleted}
      />

      <label
        className={`label-todo ${completed ? 'l-complet' : 'l-no-complet'}`}
      >
        {title}
      </label>

      <button
        className='button-trash group'
        onClick={handleRemove}
      >
        <FaRegTrashAlt className='trash' />
      </button>
    </div>
  )
}
