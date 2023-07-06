import React, { useState } from 'react'
import Header from "./components/Header"
import "./App.css"
import Input from './components/Input'
import TodoList from './components/TodoList'

 
export default function App() {
  const [list, setlist] = useState([]);
  let addList = (inputText) => {
    if(inputText!=='')
    setlist([...list, inputText]);
  }

  const DeleteListItem = (key)=>{
    let newListTodo=[...list];
    newListTodo.splice(key,1)
    setlist([...newListTodo])
  }

  return (
    <div>
      <div className="container">

        <div className="box">
          <Header />
          <Input
            addList={addList}
          />
          {list.map(function(e,i){
            //console.log("mansi",e);
            return(
              <TodoList key={i} index={i} item={e} DeleteListItem={DeleteListItem}/>
            )
            })}
        </div>
      </div>
    </div >
  )
}
