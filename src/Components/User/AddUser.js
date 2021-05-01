import { useState} from 'react';

import classStyles from './AddUser.module.css';

import Button from '../UI/Button';
import Card from '../UI/Card';
import Error from '../UI/Error';

const AddUser = (props) => {
  const [userName, setUserName] =useState('');
  const [age, setAge] = useState('');
  const [error, setError] = useState(undefined);

  const addUserHandler = (event) => {
    event.preventDefault();
    if (userName.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: 'Empty input',
        message: 'Name or Age should not be empty',
      });
      return;
    }
    if (+age.trim() < 1 || +age.trim() > 120) {
      setError({
        title: 'Invalid age',
        message: 'Age should be > 0 & < 120',
      })
      return;
    }
    props.appUsersHandler({ id: Math.random(), name: userName, age });
    setUserName('');
    setAge('');
  }

  const userNameOnChangeHandler = (event) => setUserName(event.target.value);
  const ageOnChangeHandler = (event) => setAge(event.target.value);

  const errorHandler = () => setError(undefined);

  return (
    <div>
      {error && <Error title={error.title} message={error.message} onClick={errorHandler}/>}
      <Card className={classStyles.input}>
        <form action="">
          <label htmlFor="username">Username</label>
          <input id='username' type="text" value={userName}
                 onChange={userNameOnChangeHandler}/>
          <label htmlFor="age">Age (Years)</label>
          <input id='age' type="number" value={age}
                 onChange={ageOnChangeHandler}/>
          <Button onClick={addUserHandler}>AddUser</Button>
        </form>
      </Card>
    </div>
  )
}

export default AddUser;
