// se puede usar type or interface, siendo el primero un tipado como local y el otro hace una especie de conversion a objeto, lo que permite que pueda ser utilizado en otros lugares mas facilmente
// type Todo = {
//   id: string,
//   title: string,
//   completed: boolean
// }

import { TODO_FILTERS } from "./const"

export interface Todo {
  id: string,
  title: string,
  completed: boolean
}

// esto se puede hacer para en casi que las id's cambien a number, no haya que estarlas cambiando en toda la app y componentes
export type TodoId = Pick<Todo, 'id'>
// esta otra opcion omite todos los demas, pero es lo mismo
export type TodoId = Omit<Todo, 'completed' | 'title'>

export type ListOfTodos = Todo[]
// tambien podria ser asi
// type ListOfTodos = Array<Todo>

export type FilterValue = typeof TODO_FILTERS[keyof typeof TODO_FILTERS]