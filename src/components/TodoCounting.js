export const TodoCounting = ({todoLists}) => {
    const MODE = {
        INPROGRESS: 'INPROGRESS',
        WAITTODO: 'WAITTODO',
        ALL: 'ALL'
      }
      
      const counting = (mode) => {
        switch(mode){
          case MODE.INPROGRESS:
            return todoLists.filter((obj) => obj.isInProgress === true).length
          case MODE.WAITTODO:
            return todoLists.filter((obj) => obj.isInProgress === false).length
          case MODE.ALL:
            return todoLists.length
          default:
            return 0
        }
      }

    return(
        <>
        <div>
        Waiting to do:{counting(MODE.WAITTODO)}
        </div>
        <div>
        inProgress:{counting(MODE.INPROGRESS)}
        </div>
        <div>
        All:{counting(MODE.ALL)}
        </div>
        </>
    )
}