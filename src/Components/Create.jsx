import React, { useState } from 'react'
import { addUser } from './UserReducer'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import "./Create.css"

const Create = () => {

    const [name, setName]=useState('')
    const [email, setEmail]=useState('')
    const users = useSelector(state=>state.users)

    const navigate = useNavigate()
    
    const dispatch = useDispatch()
    const handleSubmit=(event)=>{
        event.preventDefault();
        dispatch(addUser({id:users[users.length-1].id+1,name, email}))
        navigate("/")
    }

  return (
    <div className='create-form d-flex w-100 vh-100 justify-content-center align-items-center'>
        <div className='w-50 border container p-5'>
            <h3>Add New User</h3>
            <form action="" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name='name'className='form-control' placeholder='Enter Name' onChange={e=>setName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name='email'className='form-control' placeholder='Enter Email' onChange={e=>setEmail(e.target.value)}  />
                </div>
                <br/>
                <button className='btn btn-info'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Create