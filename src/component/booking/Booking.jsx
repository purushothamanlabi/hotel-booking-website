import React,{useState, useContext, useEffect} from 'react';
import './booking.css';
import { Form, FormGroup,ListGroup,ListGroupItem,Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
// import {BASE_URL} from './../../utils/config.js'
import { Authcontext } from '../../context/authContext';
import { Link } from 'react-router-dom';



import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";


const Booking = ({tour,avgRating}) => {
    const {price ,reviews,address} =tour;
     
    const navigate = useNavigate()
    const {user} = useContext(Authcontext)

   


    console.log("address",address);
     const [booking,setbooking] =useState({
        userId: user && user._id,   //
        userEmail:user && user.email,   //
        address: address,    // undifned 
        fullName:'',  // 
        phone:'',     //
        guestSize:1,  //
        bookAt:''   // 
    })

    useEffect(() => {
        setbooking(prev => ({ ...prev, address: tour?.address ||  'name not found' }));
      }, [tour]);
    

    console.log("booking info",booking);
    
     


    const handleChange = e =>{
        setbooking(pre=>({ ...pre ,[e.target.id]:e.target.value}))


    };
    const servicefee =10;
    const totalAmount = Number(price) *Number(booking.guestSize) +Number(servicefee)

    

    const handleClick = async e =>{
        e.preventDefault()
        try{
          if(!user || user === undefined || user === null){
            toast.info("first login")
          }
          
        else{
         let dataString = encodeURIComponent(JSON.stringify(booking));
         navigate(`/payment/${dataString}`);
        }
        }
        catch(err){
            toast.error(err.message)

        }      
       
    }




  return (
    <div className="booking">
        <div className="booking_top d-flex align-items-centrer justify-content-between">
            <h3>&#8377;{price} <span>/per person</span></h3>
            <span className="tour__reting  d-flex align-items-center " > 
                <i Class="ri-star-s-fill" ></i>   
                 {avgRating === 0 ? null: avgRating }({reviews?.length})
               
               </span>
        </div>
        {/* ------------------------ b form st -------------------- */}
        <div className="booking__form">
        <h5>Information</h5>
            <Form className="booking__info-form"  onSubmit={handleClick}>
                <FormGroup>
                    <input type="text"  placeholder='Full Name'id='fullName' required onChange={handleChange}/>
                </FormGroup>

                <FormGroup>
                    <input type="number" placeholder='Phone' id='phone' required onChange={handleChange}/>
                </FormGroup>

                <FormGroup className=' d-flex align-items-center gap-3'>
                    <input   type="date" placeholder=''id='bookAt'required
                        onChange={handleChange}/>

                    <input  type="number"   placeholder='Guests'id='guestSize'  required 
                    onChange={handleChange}/>
                </FormGroup>
            </Form>
        </div>

        {/* ------------------------ b form end-------------------- */}
        {/* ----------------------- booking botton --------------- */}

        <div className="bookong__botton">
            <ListGroup>
                <ListGroupItem className='border-0 px-0'>
                    <h5 className='d-flex align-items-center gap-1'>&#8377;{price}<i Class='ri-close-line'></i> 1 person</h5>
                    <span>&#8377;{price}</span>
                </ListGroupItem>
            </ListGroup>

            <ListGroup>
                <ListGroupItem className='border-0 px-0'>
                <h5>Service Charge </h5>
                    <span>&#8377;{servicefee}</span>
                </ListGroupItem>
            </ListGroup>

            <ListGroup>
                <ListGroupItem className='border-0 px-0 total'>
                <h5>Total</h5>
                    <span>&#8377;{totalAmount}</span>
                </ListGroupItem>
            </ListGroup>
            <Button className="btn primary__btn w-100 mt-4" onClick={handleClick} ><Link >book now</Link></Button>
        </div>
    </div>
    
  )
}

export default Booking