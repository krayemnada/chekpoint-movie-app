
import { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'

const MovieAdd = ({handleAdd}) => {
    
    const [text, setText] = useState("")
    const handleSumbit = (e) =>{
        setText(e.target.value)
    }
  return (
    <div>
       
      <Modal.Dialog >
  <Modal.Header closeButton>
    <Modal.Title>Add new movie</Modal.Title>
  </Modal.Header>

  <Modal.Body>
      <table>
    <div>
        <div>
           <td> <label className='input'>Title:</label></td>
            <td><input type="text" name='name' onChange={handleSumbit}  /></td>
        </div>
        <div>
           <td> <label className='input'>Image:</label></td>
           <td><input type="text" name='image' onChange={handleSumbit} /></td>
        </div>
        <div>
        <td> <label className='input'>Description:</label></td>
        <td> <input type="text" name='description'onChange={handleSumbit} /></td>
        </div>
        <div>
        <td><label className='input'>Rating:</label></td>
        <td> <input type="text" name='rating'onChange={handleSumbit} /></td>
        </div>
    </div>
    </table>
  </Modal.Body>

  <Modal.Footer>
    <Button variant="secondary"style={{color:"black"}}>Close</Button>
    <Button variant="primary" style={{color:"black"}} onClick={()=>{handleAdd(text);setText("")}} >Add</Button>
  </Modal.Footer>
</Modal.Dialog>


    </div>
  )
}

export default MovieAdd
