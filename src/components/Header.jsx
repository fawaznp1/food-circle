import React from 'react'
import headerimage from '../headerimage.png'
import { Link } from 'react-router-dom';
import { Container, Navbar, NavbarBrand } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { search } from '../redux/restaurantSlice';


function Header() {
  const dispatch=useDispatch()
  return (
<>
    <Navbar className=" d-flex justify-content-between align-items-center p-3 ms-5">
      <Container>
        <NavbarBrand className='d-flex'>
          <Link to={'/'}>
            <img src={headerimage} width={'55px'} height={'55px'} alt="no image" className='d-inline-block'  />
        <h4 className='d-inline-block ml-2 mb-0 ms-3 ' ><span className='text-warning'>  Food</span> Circle</h4>
        </Link>  
        <input type="text" onChange={(e)=>dispatch(search(e.target.value))} className='form-control w-200 ms-5  ml-5' placeholder='Enter Neighborhood' /> 

        </NavbarBrand>
        </Container>
      </Navbar>
</>
    )
}

export default Header