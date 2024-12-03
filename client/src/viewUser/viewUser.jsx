import React, { useEffect, useState } from 'react'
import './viewUser.css'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

const ViewUser = () => {
    const [user, setUser] = useState([])
    const { id } = useParams();
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

  return (
    <div className='addUser'>
        <Link to="/" type="button" className="btn btn-secondary"><i class="fa-solid fa-backward"></i> Back</Link>
        <div class="card">
  {/* <h5 class="card-header">{user.name}</h5> */}
  <div class="card-body">
    <h5 class="card-title">{user.email}</h5>
    <p class="card-text">{user.name}</p>
    <p class="card-text">{user.address}</p>
  </div>
</div>
    </div>
  )
}

export default ViewUser