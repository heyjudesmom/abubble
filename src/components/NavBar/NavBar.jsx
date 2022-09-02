import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {

  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <aside>
      <Link to='/'>Dashboard</Link>
      &nbsp; | &nbsp;
      <Link to='/appointments'>Appointments</Link>
      &nbsp; | &nbsp;
      <Link to='/chores'>Chores</Link>
      &nbsp; | &nbsp;
      <Link to='/todos'>To-Do List</Link>
      &nbsp; | &nbsp;
      <Link to='/mealplan'>Meal Plan</Link>
      &nbsp; | &nbsp;
      <Link to='/tags'>Tags</Link>
      &nbsp; | &nbsp;
      Welcome, {user.name}
      &nbsp; | &nbsp;
      <Link to='' onClick={handleLogOut}>Log Out</Link>
    </aside>
  );
}