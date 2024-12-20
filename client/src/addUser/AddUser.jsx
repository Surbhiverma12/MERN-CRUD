import React, { useState } from 'react'
import './AddUser.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'

const AddUser = () => {
  const users = {
    name:"",
    email:"",
    address:"",
  };

const [user, setUser] = useState(users)
const navigate = useNavigate();

const inputHandler = (e) => {
  const {name, value} = e.target;
  console.log(name, value)
  setUser({...user, [name]: value});
}

const submitForm = async(e) => {
  e.preventDefault();
  await axios.post("http://localhost:8000/api/users",user)
  .then((res) => {
    toast.success(res.data.message,{position: "top-right"})
    navigate("/")
  })
  .catch((error) => {
    if (error.response && error.response.status == 400){
      toast.error(error.response.data.message, {position: "top-right"})
    } else {
      toast.error("Something went wrong! Please try again.", {position: "top-right"})
    }
  })
}

  return (
    <div className='addUser'>
        <Link to="/" type="button" className="btn btn-secondary"><i class="fa-solid fa-backward"></i> Back</Link>
      <h3>Add New User</h3>
      <form className='addUserForm' onSubmit={submitForm}>
        <div className='inputGroup'>
            <label htmlFor="name">Name:</label>
            <input type="text" 
            id='name'
            name='name'
            onChange={inputHandler}
            autoComplete='off'
            placeholder='Enter your Name'
            />
        </div>
        <div className='inputGroup'>
            <label htmlFor="email">E-mail:</label>
            <input type="email" 
            id='email'
            name='email'
            onChange={inputHandler}
            autoComplete='off'
            placeholder='Enter your email'
            />
        </div>
        <div className='inputGroup'>
            <label htmlFor="address">Address:</label>
            <input type="text" 
            id='address'
            name='address'
            onChange={inputHandler}
            autoComplete='off'
            placeholder='Enter your address'
            />
        </div>
        <div className='inputGroup'>
        <button type="submit" className="btn btn-primary">Add</button>
        </div>
      </form>
    </div>
  )
}

export default AddUser
