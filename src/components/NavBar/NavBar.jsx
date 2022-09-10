// import { Link, NavLink } from 'react-router-dom';
// import * as userService from '../../utilities/users-service';

// export default function NavBar({ user, setUser }) {

//   function handleLogOut() {
//     userService.logOut();
//     setUser(null);
//   }

//   return (
// <nav class="navbar navbar-default">
//   <div class="container-fluid">
//     <div class="navbar-header">
//       <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-1" aria-expanded="false">
//         <span class="sr-only"></span>
//         <span class="icon-bar"></span>
//         <span class="icon-bar"></span>
//         <span class="icon-bar"></span>
//       </button>
//       <img class="navbar-brand" alt="Logo" src="https://i.imgur.com/3WhkOrF.png?1"/>
//     </div>
//     <div class="collapse navbar-collapse" id="navbar-collapse-1">
//       <ul class="nav nav-tabs">
//         <li role="presentation" ><NavLink class={({ isActive }) => (isActive ? "active" : "")} to='/'>Dashboard</NavLink></li>
//         <li><Link to='/appointments'>Appointments</Link></li>
//         <li><Link to='/chores'>Chores</Link></li>
//         <li><Link to='/todos'>To-Do List</Link></li>
//         <li><Link to='/mealplan'>Meal Plan</Link></li>
//         <li><Link to='/tags'>Tags</Link></li>
//       </ul>
//       <ul class="nav navbar-nav navbar-right">
//         <li>Welcome, {user.name}</li>
//         <li><Link to='' onClick={handleLogOut}>Log Out</Link></li>
//       </ul>
//     </div>
//   </div>
// </nav>
//   );
// }

