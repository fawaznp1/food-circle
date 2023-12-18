import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import ListGroup from 'react-bootstrap/ListGroup';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import RestReview from '../components/RestReview';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';



function RestView() {
  const [show, setShow] = useState(false);

  const { id } = useParams()
  console.log(id);

  const allRestaurant = useSelector((state) => state.restaurantSlice.allRestaurant)
  console.log(allRestaurant);
  const selectedRestaurant = allRestaurant.find(item => item.id == id)
  console.log(selectedRestaurant);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Row className='p-3'>
        <Col md={4} >
          <img src={selectedRestaurant.photograph} height={'450px'} width={'100%'} alt="no image review" />
        </Col>
        <Col md={8}>
          <hr />
          <h2 className='text-center p-1'><span style={{ color: 'orange' }}>RESTAURANT </span> DETAILS</h2>
          <hr />
          <ListGroup>
            <ListGroup.Item className='text-center ' style={{ fontSize: '30px' }}>{selectedRestaurant.name}  </ListGroup.Item>
            <ListGroup.Item>Neighborhood: {selectedRestaurant.neighborhood} </ListGroup.Item>
            <ListGroup.Item>Cuisine_Type:  {selectedRestaurant.cuisine_type}</ListGroup.Item>
            <ListGroup.Item>Address:  {selectedRestaurant.address} </ListGroup.Item>
            <hr />
            <div className=' d-flex justify-content-evenly align-items-center mt-4 ' >
              <Button onClick={handleShow} className='btn btn-warning me-3'>Operating Hours</Button>
              <RestReview review={selectedRestaurant.reviews} />
            </div>
           
          </ListGroup>
          
        </Col>
      </Row>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="text-center">Operating Hours</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup>
            <ListGroup.Item>Monday: {selectedRestaurant.operating_hours.Monday} </ListGroup.Item>
            <ListGroup.Item>Tueday: {selectedRestaurant.operating_hours.Tuesday} </ListGroup.Item>
            <ListGroup.Item>Wednesday:{selectedRestaurant.operating_hours.Wednesday}  </ListGroup.Item>
            <ListGroup.Item>Thursday:{selectedRestaurant.operating_hours.Thursday}</ListGroup.Item>
            <ListGroup.Item>Friday:{selectedRestaurant.operating_hours.Friday}</ListGroup.Item>
            <ListGroup.Item>Saturday:{selectedRestaurant.operating_hours.Saturday}</ListGroup.Item>
            <ListGroup.Item>Sunday:{selectedRestaurant.operating_hours.Sunday}</ListGroup.Item>
          </ListGroup>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default RestView

