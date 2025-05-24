import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import CreateUser from './components/CreateUser.jsx'
import UpdateUser from './components/UpdateUser.jsx';
import Users from './components/Users.jsx';
import './App.css'; 

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Users</Link> |{' '}
        <Link to="/CreateUser">Create User</Link> |{' '}
      </nav>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/CreateUser" element={<CreateUser />} />
        <Route path="/updateUser/:id" element={<UpdateUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

