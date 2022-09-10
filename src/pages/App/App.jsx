import { useState, useEffect } from 'react';
import { Routes, Route, NavLink, Link } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import * as tagsAPI from '../../utilities/tags-api';
import AuthPage from '../AuthPage/AuthPage';
import DashboardPage from '../DashboardPage/DashboardPage';
import AppointmentsPage from '../AppointmentsPage/AppointmentsPage';
import ChoresPage from '../ChoresPage/ChoresPage';
import TodosPage from '../TodosPage/TodosPage';
import MealPlanPage from '../MealPlanPage/MealPlanPage';
import TagsPage from '../TagsPage/TagsPage';
import './App.css';
import * as userService from '../../utilities/users-service';


export default function App() {
  const [user, setUser] = useState(getUser());
  const [tags, setTags] = useState([]);

  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  useEffect(function () {
    async function getTags() {
      if(!user) return;
      const userTags = await tagsAPI.getAll();
      setTags(userTags);
    }
    getTags();
  }, [user]);

  async function handleAddTag(tagFormData) {
    const tag = await tagsAPI.add(tagFormData)
    setTags([...tags, tag]);
  }
  async function handleDelete(tagData) {
    const tag = await tagsAPI.deleteTag(tagData);
    const updatedTags = tags.filter((t) => t._id !== tag._id)
    setTags(updatedTags);
  }
  if (!tags) return;
  
  return (
    <main className="App">
      { user ?
        <>
        <nav class="navbar navbar-default">
          <div class="container-fluid">
            <div class="navbar-header">
              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-1" aria-expanded="false">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <img class="navbar-brand" alt="Logo" src="https://i.imgur.com/3WhkOrF.png?1"/>
            </div>
            <div class="collapse navbar-collapse" id="navbar-collapse-1">
              <ul class="nav navbar-nav">
                <li><Link to='/'>{user.name}'s dash</Link></li>
                <li><Link to='/appointments'>appts</Link></li>
                <li><Link to='/chores'>chores</Link></li>
                <li><Link to='/todos'>to-do</Link></li>
                <li><Link to='/mealplan'>meals</Link></li>
                <li><Link to='/tags'>tags</Link></li>
              </ul>
              <ul class="nav navbar-nav navbar-right">
                  <li><Link to='' onClick={handleLogOut}>log out</Link></li>
              </ul>
            </div>
          </div>
        </nav>          
          <Routes>
            {/* Route components in here */}
            <Route path='/' element={<DashboardPage tags={tags} user={user}/>} />
            <Route path='/appointments' element={<AppointmentsPage tags={tags}/>} />
            <Route path='/chores' element={<ChoresPage tags={tags}/>} />
            <Route path='/todos' element={<TodosPage tags={tags}/>} />
            <Route path='/mealplan' element={<MealPlanPage tags={tags}/>} />
            <Route path='/tags' element={<TagsPage tags={tags} handleAddTag={handleAddTag} handleDelete={handleDelete} setTags={setTags}/>} />
          </Routes>
          <footer class="panel-footer">&copy; 2022 abubble</footer>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}
