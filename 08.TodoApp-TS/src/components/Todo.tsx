import { TodoId, type Todo as TodoType } from "../types"

// se podria hacer de esta manera 
// interface Props {
//   id: number,
//   title: string,
//   completed: boolean
// }

// Cuando solo teniamos una prop lo pusimos como type, como ahora le llegan varias lo cambiamos a interface ( averiguar mas sobre esto)
// type Props = TodoType

interface Props extends TodoType {
  onToggleCompleteTodo: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
  onRemoveTodo: ({ id }: TodoId) => void
}



export const Todo: React.FC<Props> = ({ id, title, completed, onRemoveTodo, onToggleCompleteTodo }) => {

  const handleChangeCheckBox = (event: React.ChangeEvent<HTMLInputElement>): void => {
    onToggleCompleteTodo({
      id,
      completed: event.target.checked
    })
  }

  return (
    <div className="view">
      <input
        title="toggle"
        className="toggle"
        checked={completed}
        type="checkbox"
        // se puede hacer de ambas formas
        // onChange={(e) => { onToggleCompleteTodo({ id, completed: e.target.checked }) }}
        onChange={handleChangeCheckBox}
      />
      <label>{title}</label>
      <button
        title="destroyBtn"
        className="destroy"
        onClick={() => onRemoveTodo({ id })}
      />
    </div>
  )
}