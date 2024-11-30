import React, { useState, useEffect } from 'react'
import './User.css'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'


const User = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        const fetchData = async() => {
            try {

                const response = await axios.get("http://localhost:8000/api/users")
                setUsers(()=> response.data)

            } catch (error) {
                console.log("Error while fetching date", error)
            }
        }
        fetchData();
    }, [])

    const navigate = useNavigate();



const deleteUser = async (id)=> {
        await axios.delete(`http://localhost:8000/api/users/${id}`)
        .then((res) => {
            setUsers((prevUser) => prevUser.filter((user) => user._id != id))
            toast.success(res.data.message, {position: "top-right"})
            navigate("/")
        })
        .catch((Error)=> {
            console.log(Error)
        })
}

  return (
    <div className='userTable'>
        <Link to="/add" type="button" className="btn btn-primary">
            Add User <i className="fa-solid fa-user-plus"></i>
        </Link>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th scope='col'>S.No</th>
                    <th scope='col'>Name</th>              
                    <th scope='col'>Email</th>
                    <th scope='col'>Address</th>
                    <th scope='col'>Actions</th>
                </tr>
            </thead>
            <tbody>
            {users.length > 0 ? (
            users.map((user, index) => (
               <tr key={user._id}> 
                    <td>{index+1}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.address}</td>
                    <td className='actionButtons'> 
                    <Link to={`/update/`+user._id} type="button" className="btn btn-info">
                    <i className="fa-solid fa-pen-to-square"></i>
                    </Link>
                    <button type="button" onClick={() => deleteUser(user._id)} className="btn btn-danger">
                    <i className="fa-solid fa-trash"></i>
                    </button>
                    
                    </td>
                </tr>
                
            ))) :  (
                <tr>
                    <td colSpan="5">No users available</td> {/* Show message if no users */}
                </tr>
            )}
              
            </tbody>
        </table>
    </div>
  )
}

export default User
