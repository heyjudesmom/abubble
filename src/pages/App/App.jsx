import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import * as tagsAPI from '../../utilities/tags-api';
import AuthPage from '../AuthPage/AuthPage';
import DashboardPage from '../DashboardPage/DashboardPage';
import AppointmentsPage from '../AppointmentsPage/AppointmentsPage';
import ChoresPage from '../ChoresPage/ChoresPage';
import TodosPage from '../TodosPage/TodosPage';
import MealPlanPage from '../MealPlanPage/MealPlanPage';
import TagsPage from '../TagsPage/TagsPage';
import NavBar from '../../components/NavBar/NavBar';
import './App.css';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [tags, setTags] = useState([]);

  useEffect(function () {
    async function getTags() {
      const tags = await tagsAPI.getAll();
      setTags(tags);
    }
    getTags();
  }, []);

  async function handleAddTag(tagFormData) {
    const tag = await tagsAPI.add(tagFormData)
    setTags([...tags, tag]);
  }

  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser}/>
          <Routes>
            {/* Route components in here */}
            <Route path='/' element={<DashboardPage />} />
            <Route path='/appointments' element={<AppointmentsPage tags={tags}/>} />
            <Route path='/chores' element={<ChoresPage tags={tags}/>} />
            <Route path='/todos' element={<TodosPage tags={tags}/>} />
            <Route path='/mealplan' element={<MealPlanPage />} />
            <Route path='/tags' element={<TagsPage tags={tags} handleAddTag={handleAddTag}/>} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}
