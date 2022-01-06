import './ItemForm.css';
import { useState } from 'react';

const ItemForm = () => {
  const [currentListItem, setCurrentListItem] = useState('')

  return (
    <form>
      <p>item form</p>
      <input 
        className='text-input'
        name='currentListItem'
        value={currentListItem}
        onChange={() => setCurrentListItem(currentListItem)}
      />
      <button>Add To List</button>
    </form>
  )
}


export default ItemForm;