import { useState } from "react";
import EditChoreForm from "../EditChoreForm/EditChoreForm";

export default function ChoreItem({ c, index, handleDelete, tags, handleUpdate, setShowEditForm, showEditForm }) {
    const [showUpdateForm, setShowUpdateForm] = useState(false);
    const [formData, setFormData] = useState(c);

    const tagIdArr = c.tags;
    const tagObjs = tags.filter((t) => tagIdArr.includes(t._id))
    const tagDivs = tagObjs.map((t, idx) => <button key={idx} style={{backgroundColor: `${t.color}`}} onClick={function(){alert('Clicked')}}>{t.text}</button>)

    return (
        <div className="page-list-item">
            {showEditForm ? 
            <>
                <button onClick={() => setShowEditForm(!showEditForm)}>Show Details</button>
                <EditChoreForm c={c} handleUpdate={handleUpdate} tags={tags} setShowEditForm={setShowEditForm} showEditForm={showEditForm}/> 
            </>
            : 
            <>
                <button onClick={() => setShowEditForm(!showEditForm)}>Edit Chore</button>
                <div>{c.text}</div> 
                <div>{tagDivs}</div>
                <button onClick={() => handleDelete(c._id)}>X</button>
                <br/><br/>
            </>
            }
        </div>
      );
}