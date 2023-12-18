import React from 'react'
import { Button} from 'react-bootstrap'
import { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';


function RestReview(props) {
  const [open, setOpen] = useState(false);
  const review=props.review
  console.log(review);

  return (
    <>
        <div className=''>
  <Button onClick={() => setOpen(!open)} className='btn btn-warning d-flex justify-content-evenly'>Click here to see Reviews</Button>
       
  <Collapse in={open} >
         <div className=''>
       {review.map((item)=>(
        <>
        <h6 className='text-center'>Name:{item.name} (Date):{item.date} </h6>
        <p className='text-center'>Rating:{item.rating} </p>
        <p>Comment:{item.comments} </p>
     </>
       ))}
         </div>
     </Collapse >
        
        </div>
      
    </>
  )
}

export default RestReview