import axios from 'axios';
import React, { useState , useEffect} from 'react';
import { Link } from 'react-router-dom';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:3001/users')
    .then(result => setUsers(result.data))
    .catch(err => console.log(err))
  },[])

 const handleDelete = (id) => {
  axios.delete(`http://localhost:3001/deleteUser/${id}`)
    .then(() => {
      setUsers(users.filter(user => user._id !== id));
    })
    .catch(err => console.log(err));
  };

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <h2 className="text-center mb-4">Users List</h2>
        <Link to="/CreateUser" className='btn btn-success'>ADD +</Link>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
                <td>
                  <Link to={`/updateUser/${user._id}`} className='btn btn-success'>Update</Link>
                  <button className='btn btn-danger' onClick={(e)=>handleDelete(user._id)}> DELETE</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;
