import React, { useState } from 'react';
import { Todos } from './components/Todos';
import { type TodoId, type Todo as TodoType } from './types';


const mockTodos = [
  {
    id: '1',
    title: 'Aprender react con TypesScript',
    completed: false,
  },
  {
    id: '2',
    title: 'Hacer el examen de Cisco',
    completed: false,
  },
  {
    id: '3',
    title: 'Ir a cambiar la llanta de la moto',
    completed: true,
  },
]

// Puede ser tipado como un React functional component o un JSX element
// const App = (): JSX.Element => {


const App: React.FC = () => {

  const [todos, setTodos] = useState(mockTodos)

  const handleRemove = ({ id }: TodoId): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }
  // Otra forma de tipar 
  // const handleCompleted = ({ id, completed }: id : TodoId , completed: TodoCompleted): void => {

  const handleCompleted = ({ id, completed }: Pick<TodoType, 'id' | 'completed'>): void => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed
        }
      }
      return todo
    })
    setTodos(newTodos)


  }

  return (
    <div className='todoapp'>
      <Todos
        onToggleCompleteTodo={handleCompleted}
        onRemoveTodo={handleRemove}
        todos={todos} />
    </div>
  )
}

export default App
