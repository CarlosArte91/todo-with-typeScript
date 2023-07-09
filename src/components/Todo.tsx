import { type Todo, type TodoId } from '../types'

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
    <div className='view'>
      <input
        className='toggle'
        type='checkbox'
        checked={completed}
        onChange={handleToggleCompleted}
      />

      <label className='label-todo'>
        {title}
      </label>

      <button
        className='destroy'
        onClick={handleRemove}
      >
        X
      </button>
    </div>
  )
}
