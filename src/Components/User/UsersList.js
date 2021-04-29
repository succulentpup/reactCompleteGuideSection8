import Card from "../UI/Card";
import styledClasses from './UsersList.module.css';

const UsersList = (props) => {
  return(
    <Card className={styledClasses.users}>
      <ul>
        {props.users.map((user) => <li key={user.id}>{`${user.name} is ${user.age} Years old`}</li>)}
      </ul>
    </Card>
  );
};

export default UsersList;
