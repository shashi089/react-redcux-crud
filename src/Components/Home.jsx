import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteUser } from './UserReducer';


const Home = () => {
    const users= useSelector((state)=>state.users)
    const dispatch = useDispatch()
    const handleDelete = (id)=>{
       dispatch(deleteUser({id:id}))
    }
  return (
    <div className='container'>
        <h2 className='text-center'>CRUD Application</h2>
        <Link to="/create" className='btn btn-success my-3'>Create</Link>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user,index)=>{
                    return(<tr key={index}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td> <Link to={`/edit/${user.id}`} className='btn btn-sm btn-primary'>Eidt</Link>
                        <button className='btn btn-sm btn-danger ms-2'onClick={()=> handleDelete(user.id)} >Delete</button> </td>
                      </tr>)
                    
                })}
            </tbody>
        </table>
    </div>
  )
}

export default Home