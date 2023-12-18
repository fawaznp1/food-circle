import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import RestCard from '../components/RestCard'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRestaurant } from '../redux/restaurantSlice'

function Home() {
    const allrestaurant=useSelector((state)=>state.restaurantSlice.allRestaurant)
    console.log(allrestaurant);

    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(fetchRestaurant())
    },[])
  return (
<Row className='p-5 '>
    {allrestaurant?.length>0?
    allrestaurant.map((restaurant)=>(
    <Col className='mb-5' sm={6} md={4}>
        <RestCard restaurant={restaurant} />
    </Col>
    )): <p>Nothing to display</p>
         }
</Row>  
)
}

export default Home