import {FaTimes} from 'react-icons/fa'
import {TbArrowMoveUp} from 'react-icons/tb'

const ListComponent = ({ listComponent, onDelete, moveUp, index }) => {
  return (
    <li key={index}>

        <div className="listComponent">
            <div className="wish-details">
              <h3>
                  {listComponent.text} 
              </h3>
              <FaTimes className='close_btn' style={{cursor:'pointer'}} onClick = {() => onDelete(index)}/>
              <TbArrowMoveUp className='up_btn' style={{cursor:'pointer'}}  onClick = {() => moveUp(index)}/>
            </div>
            <p>priority {listComponent.priority}</p>
        </div>
    </li>
  )
}

export default ListComponent