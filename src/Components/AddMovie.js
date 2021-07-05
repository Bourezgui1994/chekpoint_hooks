import React, {useState} from 'react'
import {Button,Modal,Form,Col} from 'react-bootstrap';


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
      duration:"",
      type:"",
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
      duration:"",
      type:"",
  })
   handleClose()
  }

  return (
    <div >
      <Button variant="primary" onClick={handleShow} className="addButton">
        Add movies
      </Button>

      <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>Add new movie</Modal.Title>
        </Modal.Header>
        <Modal.Body className="addMovie">
            <Form className="formGroup">
            <Form.Control placeholder="Title" name="title" onChange={(e)=> change(e)} />
            <Form.Control placeholder="Description" name="description" onChange={(e)=> change(e)} />
            <Form.Control placeholder="Rating" name="rating" onChange={(e)=> change(e)} />
            <Form.Control placeholder="Image" name="image" onChange={(e)=> change(e)}  />

            <Form.Row>
                  <Col>
                    <Form.Control placeholder="Type" name="type" onChange={(e)=> change(e)} />
                  </Col>
                  <Col>
                    <Form.Control placeholder="Duration" name="duration" onChange={(e)=> change(e)}/>
                  </Col>
            </Form.Row>

            </Form>
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
