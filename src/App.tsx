import React, {useRef, useState} from 'react';
import './App.css';
import TodoItem from "./TodoItem";

function App() {
  const todoInputRef = useRef<HTMLInputElement>(null)

  const [items, setItems] = useState([{id: 0, text: 'Task 1', completed: true}, {id: 1, text: 'Task 2', completed: false}])

  function handleTodo() {
    const todo = todoInputRef.current!.value
    if (todo === '') return;
    todoInputRef.current!.value = ''

    setItems((prevState) => [...prevState, {id: prevState.length>0? (prevState[prevState.length-1].id +1):0 , text: todo, completed:false}])
    console.log(items)
  }
  console.log(items)

  return (
      <div>
        <h1>TODO-ify</h1>

        <div >
          <h1>Add Item</h1>
          <input ref={todoInputRef} type="text"/>
          <button type={"submit"} onClick={handleTodo}>Add</button>
        </div>

        <div >
          <h1>TODO LIST</h1>
          <div id='todoList'>
            {items.filter(item => !item.completed).map(item => <TodoItem key={item.id} item={item} setItems={setItems}/>)}
          </div>
        </div>

        <div >
          <h1>Completed</h1>
          <div>
            {items.filter(item => item.completed).map(item => <TodoItem key={item.id} item={item} setItems={setItems}/>)}
          </div>
        </div>
      </div>
  );
}

export default App;
