import { TodoInput } from './components/TodoInput';
import { TodoList } from './components/TodoList'
import { TodoHeader } from './components/TodoHeader';
import { TodoInProgress } from './components/TodoInProgress';
import { TodoCounting } from './components/TodoCounting';
import { useState } from "react"
import './App.css';

function App() {
  const [todoLists, setTodoLists] = useState([])
  const [inProBox, setinProBox] = useState(false)

  const onClickDelete = (index) => {
    setTodoLists([...todoLists.slice(0,index), ...todoLists.slice(index+1)])
  }

  // const onClickCheck = (id) => {
  //   const newList = todoLists.map((ele)=>{
  //     if(ele.id === id){
  //       ele.isInProgress = !ele.isInProgress
  //     }
  //     return ele
  //   })
  //   setTodoLists(newList)
  // }
  // 新添加的item会出现id重复导致多个item同时被checked

  const onClickCheck = (index) => {
    const newList = [...todoLists]
    newList[index].isInProgress = !newList[index].isInProgress
    if (inProBox){
      newList[index].isVisible = !newList[index].isVisible
    }
    setTodoLists(newList)
  }

  const onClickShow = () => {
    setinProBox(!inProBox)
    const showList = todoLists.map((ele)=>{
      if(!ele.isInProgress){
        ele.isVisible = !ele.isVisible
      }
      return ele
    })
    setTodoLists(showList)
  }


  return (
    <>
    <TodoHeader headerContente={'TODOLIST'} />
    <TodoCounting todoLists={todoLists} />
    <TodoInput setTodoLists={setTodoLists} todoLists={todoLists} inProBox={inProBox}/>
    <TodoInProgress onClickShow={onClickShow} todoLists={todoLists} inProBox={inProBox} />
    <TodoList todoLists={todoLists} onClickCheck={onClickCheck} onClickDelete={onClickDelete} />
    </>
  );
}

export default App;
