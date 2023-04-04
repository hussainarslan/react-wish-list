import ListComponent from "./ListComponent"

const List = ({ list, onDelete, onMove }) => {
  return (
    <>
        <ul>
            {list.map((listComponent, index) => (
            
                <ListComponent key = {listComponent.id} listComponent = {listComponent} onDelete={onDelete} moveUp = {onMove} index = {index}/>
            ))}
        </ul>
    </>
  )
}

export default List