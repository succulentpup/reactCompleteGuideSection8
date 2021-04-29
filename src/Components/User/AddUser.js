import Button from '../UI/Button';
import Card from "../UI/Card";

import classStyles from './AddUser.module.css';

const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
  }

  return (
    <Card className={classStyles.input}>
      <form action="">
        <label htmlFor="username">Username</label>
        <input id='username' type="text"/>
        <label htmlFor="age">Age</label>
        <input id='age' type="number"/>
        <Button onClick={addUserHandler}>AddUser</Button>
      </form>
    </Card>
  )

}

export default AddUser;
