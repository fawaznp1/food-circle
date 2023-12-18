import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


function RestCard({restaurant}) {
  return (
    <>
    <Link to={`/Rview/${restaurant.id}`} style={{textDecoration:"none"}}>
         <Card style={{ width: '100%' }}>
          <Card.Img variant="top" src={restaurant.photograph} height={'400px'} />
          <Card.Body>
            <Card.Title className='text-center ' style={{color:'orangered'}}>{restaurant.name}</Card.Title>
           <div className='d-flex justify-content-evenly mt-4'>
            
             <Card.Text>
              {restaurant.cuisine_type}
             </Card.Text>
             <Card.Text>
             Nearby:  {restaurant.neighborhood}
             </Card.Text>
           </div>
          </Card.Body>
        </Card>
    </Link >
    </>
  )
}

export default RestCard