import Button from './Button'
import {useState} from 'react'
import List from './List'
import Popup from './Popup'

const Wishlist = () => {
  const [list, setComponent] = useState([])
  const [newText, setNewText] = useState("");
  const [newPriority, setNewPriority] = useState("");
  const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = e => {
    if(isOpen == false)
      setIsOpen(true);
    else
      setIsOpen(false);
    
      return addComponent();
  }
  //add component
  const addComponent = () => {
    if (newText.trim() !== "") {
      if(list.length == 0){
        setComponent([
          ...list,
          {
            text: newText,
            priority: newPriority,
          },
        ]);
      }
      else {
        if(newPriority == "1"){
          setComponent([
            {
              text: newText,
              priority: newPriority,
            },
            ...list
          ]);
        }
        else if(newPriority == "2"){
          const first =  list.slice(0, list.length/2);
          const last = list.slice(list.length/2);
          setComponent([
            ...list.slice(0, list.length/2),
            {
              text: newText,
              priority: newPriority,
            },
            ...list.slice(list.length/2),
          ]);
        }
        else{
          setComponent([
            ...list,
            {
              text: newText,
              priority: newPriority,
            },
          ]);
        }
      }
      
      setNewText("");
      setNewPriority("");
    }
  };

  //delete list component
  const deleteComponent = (id) => {
    const newList = [...list];
    const component = newList.splice(id, 1)[0];
    setComponent(newList);
  }

  //move list component to top
  const moveUp = (id) => {
    
    console.log(id);
    const newList = [...list];
    
    const component = newList.splice(id, 1)[0];
    newList.unshift(component);
    setComponent(newList);
    console.log(newList);
  }

  return (
    <header className="header">
        <div className="wishlist">
          <div className="top">
            <h1>Wishlist</h1>
            
            <Button text="add_box" onClick={togglePopup}></Button>
          </div>
          <div>
          {isOpen && <Popup
            content={<>
              <input type="text" id="name" value={newText}
              onChange={(e) => setNewText(e.target.value)}/>

              <select id="select1" value={newPriority}
              onChange={(e) => setNewPriority(e.target.value)}>
                  <option value="0">Default</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
              </select>

              <button className="submit" onClick={togglePopup}>Add</button>
            </>}
            handleClose={togglePopup}
          />}
        </div>
          <List list = {list} onDelete ={deleteComponent} onMove = {moveUp}/>
        </div>

        
    </header>
  )
}

export default Wishlist