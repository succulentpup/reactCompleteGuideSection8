import { useState} from "react";
import Button from '../UI/Button';
import Card from "../UI/Card";

import classStyles from './AddUser.module.css';

const AddUser = (props) => {
  const [userName, setUserName] =useState('');
  const [age, setAge] = useState('');

  const addUserHandler = (event) => {
    event.preventDefault();
    if (userName.trim().length === 0 || age.trim().length === 0) return;
    if (+age.trim() < 1 || +age.trim() > 120) return;
    props.appUsersHandler({ id: Math.random(), name: userName, age });
    setUserName('');
    setAge('');
  }

  const userNameOnChangeHandler = (event) => setUserName(event.target.value);
  const ageOnChangeHandler = (event) => setAge(event.target.value);

  return (
    <Card className={classStyles.input}>
      <form action="">
        <label htmlFor="username">Username</label>
        <input id='username' type="text" value={userName} onChange={userNameOnChangeHandler}/>
        <label htmlFor="age">Age (Years)</label>
        <input id='age' type="number" value={age} onChange={ageOnChangeHandler}/>
        <Button onClick={addUserHandler}>AddUser</Button>
      </form>
    </Card>
  )
}

export default AddUser;
