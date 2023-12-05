import React, { useState } from 'react';
import { Todos } from './components/Todos';

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

  const handleRemove = (id: string): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    console.log("hi");

    setTodos(newTodos)
  }

  return (
    <div className='todoapp'>
      <Todos
        onRemoveTodo={handleRemove}
        todos={todos} />
    </div>
  )
}

export default App
