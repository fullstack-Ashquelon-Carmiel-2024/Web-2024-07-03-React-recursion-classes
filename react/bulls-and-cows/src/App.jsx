import { useState } from 'react';

import AddUser from './components/addUser/AddUser';
import Header from './components/header/Header';
import UserList from './components/userList/UserList';


function App() {
  // MISSION: convert "users" into "state" and make
  // this array to be their initial value
  const [users,setUsers] = useState(
      [
        { id: 77, fullName: 'Harleen Frances Quinzel', nick: 'Harley Quinn',
          email:'harley@gmail.com', phone: '555-5555', gender: 'f',role:'player'},
        { id: 121, fullName: 'Joakin Phoenix', nick: 'Joker',
          email:'joker@gmail.com',  gender: 'm',role:'player'},
        { id: 123, fullName: 'Bruce Wayne', nick: 'Batman',
          email:'bat@gmail.com', phone: '555-5557',role:'player'},
        { id: 111, fullName: 'Princess Diana of Thymiscira', nick: 'Wonder Woman',
            email:'gal.gadot@gmail.com', phone: '555-5558', role:'admin'}
      ]);

  return (
    <div className="App container pb-5">
      <div className="appTitle">Bulls and Cows</div>
      <div className="row gx-0 gy-3">

        <UserList users={users}>
          <Header title='User List' /> 
        </UserList>

        <AddUser>
          <Header title='Add User' /> 
        </AddUser>

      </div>
    </div>
  );
}

export default App;
