import { type Todo as TodoType } from "../types"

// se podria hacer de esta manera 
// interface Props {
//   id: number,
//   title: string,
//   completed: boolean
// }

// Cuando solo teniamos una prop lo pusimos como type, como ahora le llegan varias lo cambiamos a interface ( averiguar mas sobre esto)
// type Props = TodoType

interface Props extends TodoType {
  onRemoveTodo: (id: string) => void
}



export const Todo: React.FC<Props> = ({ id, title, completed, onRemoveTodo }) => {
  return (
    <div className="view">
      <input
        title="toggle"
        className="toggle"
        checked={completed}
        type="checkbox"
        onChange={() => { }}
      />
      <label>{title}</label>
      <button
        title="destroyBtn"
        className="destroy"
        onClick={() => onRemoveTodo(id)}
      />
    </div>
  )
}