import {useState} from 'react'

const App:React.FC = () => {
  interface SingleTodo {
    id: number,
    name: string,
    done: boolean
  }

  const [todos, setTodos] = useState<SingleTodo[]>([{id:1, name: 'Do Dishes', done: false}, {id: 2, name: 'Groceries', done: false}, {id: 3, name: 'Walk Dog', done: false}, {id:4, name: 'Garbage', done: false}])

  const changeTodo = (oneTodo:SingleTodo) => {
    oneTodo.done = !oneTodo.done
    setTodos(todos.map((todo) => {
       return todo.id !== oneTodo.id ? todo : oneTodo
    }))
  }
  
   return (
    <>
      <h1>Todo List</h1>
      <div>
        <h2>TODO's</h2>
        {todos.map((todo) => {
         return !todo.done ? <p onClick={()=>{changeTodo(todo)}}>{todo.name}</p> : ''
      })}
      </div>
      <div>
        <h2>DONE</h2>
        {todos.map((todo) => {
         return todo.done ? <p onClick={()=>{changeTodo(todo)}}>{todo.name}</p> : ''
      })}
      </div>
    </>
   )
}

export default App