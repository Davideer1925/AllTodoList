import { useRef, useState } from "react"

export const TodoInput = ({setTodoLists, todoLists, inProBox}) => {
    const [inputValue, setInputValue] = useState('')
    const inputFocus = useRef(null)

    const onClickAdd = () => {
        if(!inputValue){
            return;
        }
        setTodoLists((todoList)=>[...todoList, {content: inputValue, isInProgress: false, isVisible: inProBox ? false:true}])
        setInputValue('')
        inputFocus.current.focus()
    }

    const activeList = todoLists.filter((obj) => obj.isInProgress === false);

    return (
        <>
        <input 
        type='text' 
        onChange={(e)=>setInputValue(e.target.value)} 
        value={inputValue} 
        ref={inputFocus}
        disabled={activeList.length>=5}/>
        <button
        disabled={!inputValue || activeList.length>=5} 
        onClick={onClickAdd}>Add</button>
        </>
    )

}
