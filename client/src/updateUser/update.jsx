import React, { useEffect, useState } from 'react'
import './update.css'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'

const Update = () => {
  const users = {
    name:"",
    email:"",
    address:"",
  };

const [user, setUser] = useState(users)
const navigate = useNavigate();
const { id } = useParams();

const inputHandler = (e) => {
  const {name, value} = e.target;
  console.log(name, value)
  setUser({...user, [name]: value});
}

useEffect(() => {
    axios.get(`http://localhost:8000/api/users/${id}`)
    .then((res)=>{
        console.log(res.data)
        setUser(res.data)
    })
    .catch((error) => {
        console.log(error)
    })
},[id]);

const submitForm = async(e) => {
  e.preventDefault();
  await axios.put(`http://localhost:8000/api/users/${id}`, user)
  .then((res) => {
    toast.success(res.data.message,{position: "top-right"})
    navigate("/")
  })
  .catch((error) => {
    if (error.response && error.response.status == 400){
      toast.error(error.response.data.message, {position: "top-right"})
    }
    console.log(error)
  })
}

  return (
    <div className='addUser'>
        <Link to="/" type="button" className="btn btn-secondary"><i class="fa-solid fa-backward"></i> Back</Link>
      <h3>Update User</h3>
      <form className='addUserForm' onSubmit={submitForm}>
        <div className='inputGroup'>
            <label htmlFor="name">Name:</label>
            <input type="text" 
            id='name'
            name='name'
            value={user.name}
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
            value={user.email}
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
            value={user.address}
            onChange={inputHandler}
            autoComplete='off'
            placeholder='Enter your address'
            />
        </div>
        <div className='inputGroup'>
        <button type="submit" className="btn btn-primary">Update</button>
        </div>
      </form>
    </div>
  )
}

export default Update

