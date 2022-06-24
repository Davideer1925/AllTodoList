export const TodoItem = ({content, index, isInProgress, isVisible, onClickCheck, onClickDelete}) => {
    return (
        <>{isVisible &&
        <li>
            <input 
            type={'checkbox'} 
            onClick={()=>onClickCheck(index)} 
            checked={isInProgress} 
            onChange={e=>e.target.checked} 
            />
            <span
            style={{textDecoration: isInProgress ? 'underline':'none'}}
            >
                {content}
            </span>
            {!isInProgress && <button onClick={()=>onClickDelete(index)}>Delete</button>}
        </li>}
        </>
    )
}