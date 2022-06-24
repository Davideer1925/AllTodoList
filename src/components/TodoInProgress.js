export const TodoInProgress = ({onClickShow, todoLists, inProBox}) => {
    return (
        <>
        <input type={'checkbox'} onClick={onClickShow} checked={inProBox} disabled={todoLists.length===0}/>
        <span>Show inprogress todos</span>
        </>
    )
}