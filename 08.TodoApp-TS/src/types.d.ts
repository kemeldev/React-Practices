// se puede usar type or interface, siendo el primero un tipado como local y el otro hace una especie de conversion a objeto, lo que permite que pueda ser utilizado en otros lugares mas facilmente
// type Todo = {
//   id: string,
//   title: string,
//   completed: boolean
// }

export interface Todo {
  id: string,
  title: string,
  completed: boolean
}

export type ListOfTodos = Todo[]
// tambien podria ser asi
// type ListOfTodos = Array<Todo>