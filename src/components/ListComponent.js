import {FaTimes} from 'react-icons/fa'
import {TbArrowMoveUp} from 'react-icons/tb'

const ListComponent = ({ listComponent, onDelete, moveUp, index }) => {
  return (
    <li key={index}>

        <div className="listComponent">
            <h3>
                {listComponent.text} 
                <FaTimes style={{cursor:'pointer'}} onClick = {() => onDelete(index)}/>
                <TbArrowMoveUp style={{cursor:'pointer'}}  onClick = {() => moveUp(index)}/>
            </h3>
            <p>priority {listComponent.priority}</p>
        </div>
    </li>
  )
}

export default ListComponent