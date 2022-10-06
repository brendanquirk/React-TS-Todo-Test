import React, {useState} from 'react'

const App:React.FC = () => {
  interface SingleTodo {
    name: string,
    done: boolean
  }

  const [todos, setTodos] = useState<SingleTodo[]>([{ name: 'Do Dishes', done: false}, { name: 'Groceries', done: false}, { name: 'Walk Dog', done: false}, { name: 'Garbage', done: false}])

  const [newTodo, setNewTodo] = useState({ name: '', done: false})

  const changeTodo = (oneTodo:SingleTodo) => {
    oneTodo.done = !oneTodo.done
    setTodos(todos.map((todo) => {
       return todo.name !== oneTodo.name ? todo : oneTodo
    }))
  }

  const addTodo = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setTodos([...todos, newTodo])
  }

  const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo({...newTodo, [event.target.name]: event.target.value })
  }
  
   return (
    <>
      <h1>Todo List</h1>
      <form onSubmit={addTodo}>
        <input type="text" onChange={handleChange} name="name"/>
        <input type="submit" />
      </form>
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