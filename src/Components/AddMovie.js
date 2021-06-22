import React, {useState} from 'react'
import {Button,Modal} from 'react-bootstrap';


const AddMovie = ({Add}) => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
  // new movie state 
  
  const [newMovie,setNewMovie]=useState({
      id : Math.random(),
      title:"",
      rating:"",
      image:"",
      description:"",
  });

  const{title,rating,image,description}=newMovie
  const change = (e)=>{
    setNewMovie({...newMovie, [e.target.name]:e.target.value})
  }

  const addNewMovie = () =>{
    Add(newMovie)
    setNewMovie({
      id : Math.random(),
      title:"",
      rating:"",
      image:"",
      description:"",
  })
   handleClose()
  }

  return (
    <div>
      <Button variant="primary" onClick={handleShow} className="addButton">
        Add movies
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form className="formGroup">

            <label>title</label>
            <input type="text" name="title" onChange={(e)=> change(e)}></input>

            <label>Description</label>
            <input type="text" name="description" onChange={(e)=> change(e)} ></input>

            <label>Rating</label>
            <input type="text"  name="rating" onChange={(e)=> change(e)} ></input>

            <label>Image</label>
            <input type="text"  name="image" onChange={(e)=> change(e)} ></input>

            </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>addNewMovie()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );

}

export default AddMovie;
