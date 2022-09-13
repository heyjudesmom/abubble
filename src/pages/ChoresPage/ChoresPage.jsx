import ChoreList from "../../components/ChoreList/ChoreList";
import NewChoreForm from "../../components/NewChoreForm/NewChoreForm";
import * as choresAPI from "../../utilities/chores-api"
import {useState, useEffect} from 'react';
import "./ChoresPage.css";
export default function ChoresPage({tags, itemizeTags}) {
  const [chores, setChores] = useState([]);
  const [showEditForm, setShowEditForm] = useState("")

  useEffect(function () {
    async function getChores() {
      const chores = await choresAPI.getAll();
      setChores(chores);
    }
    getChores();
  }, []);

  async function handleAddChore(choreFormData) {
    const chore = await choresAPI.add(choreFormData)
    setChores([...chores, chore]);
  }

  async function handleDelete(choreData) {
    const chore = await choresAPI.deleteChore(choreData);
    const updatedChores = chores.filter((c) => c._id !== chore._id)
    setChores(updatedChores);
  }

  async function handleUpdate(formData, id) {
    const chores = await choresAPI.update(formData, id);
    setChores(chores);
  }

    return (
      <main>
        <h1>chores.</h1>
        <main className="flex-ctr-ctr">
          <ChoreList chores={chores} tags={tags} handleDelete={handleDelete} handleUpdate={handleUpdate} setShowEditForm={setShowEditForm} showEditForm={showEditForm} itemizeTags={itemizeTags}/>
          <NewChoreForm handleAddChore={handleAddChore} tags={tags} />
        </main>
    </main>
    );
  }