import { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
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
  
  function itemizeTags(item) {
    const tagIdArr = item.tags;
    const tagObjs = tags.filter((t) => tagIdArr.includes(t._id))
    const tagDivs = tagObjs.map((t, idx) => <button class="btn btn-default btn-xs" key={idx} style={{backgroundColor: `${t.color}`}}>{t.text}</button>)
    return tagDivs
  }

  return (
    <main className="App">
      { user ?
        <>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-1" aria-expanded="false">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <img className="navbar-brand" alt="Logo" src="https://i.imgur.com/3WhkOrF.png?1"/>
            </div>
            <div className="collapse navbar-collapse" id="navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li><Link to='/'>{user.name}'s dash</Link></li>
                <li><Link to='/appointments'>appts</Link></li>
                <li><Link to='/chores'>chores</Link></li>
                <li><Link to='/todos'>to-do</Link></li>
                <li><Link to='/mealplan'>meals</Link></li>
                <li><Link to='/tags'>tags</Link></li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                  <li><Link to='' onClick={handleLogOut}>log out</Link></li>
              </ul>
            </div>
          </div>
        </nav>          
          <Routes>
            {/* Route components in here */}
            <Route path='/' element={<DashboardPage user={user} itemizeTags={itemizeTags}/> } />
            <Route path='/appointments' element={<AppointmentsPage tags={tags} itemizeTags={itemizeTags}/>} />
            <Route path='/chores' element={<ChoresPage tags={tags} itemizeTags={itemizeTags}/>} />
            <Route path='/todos' element={<TodosPage tags={tags} itemizeTags={itemizeTags}/>} />
            <Route path='/mealplan' element={<MealPlanPage tags={tags}/>} />
            <Route path='/tags' element={<TagsPage tags={tags} handleAddTag={handleAddTag} handleDelete={handleDelete} setTags={setTags}/>} />
          </Routes>
          <footer className="footer">&copy; 2022 abubble</footer>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}
