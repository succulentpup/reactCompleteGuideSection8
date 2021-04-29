import React, {useState} from 'react';
import AddUser from './Components/User/AddUser';
import UsersList from './Components/User/UsersList';


function App() {
  const [users, setUsers] = useState([]);

  const appUsersHandler = (user) => {
    setUsers((prevUsers) => {
      return [...prevUsers, user];
    });
  }
  return (
    <div>
      <AddUser appUsersHandler={appUsersHandler}/>
      <UsersList users={users}/>
    </div>
  );
}

export default App;
