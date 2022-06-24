import { TodoItem } from './TodoItem'

export const TodoList = ({todoLists, onClickCheck, onClickDelete}) => {
    return(
        <ol>
            {todoLists.map(({content, isInProgress, isVisible}, index)=>{
                return(
                    <TodoItem 
                    key={`${content}+${index}`} 
                    content={content}
                    isInProgress={isInProgress}
                    isVisible={isVisible}
                    onClickCheck={onClickCheck} 
                    onClickDelete={onClickDelete}
                    index={index}
                    />
                )
            })}
        </ol>
    )
}