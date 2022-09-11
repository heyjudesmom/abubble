import { useState } from "react";
import EditChoreForm from "../EditChoreForm/EditChoreForm";

export default function ChoreItem({ c, index, handleDelete, tags, handleUpdate, setShowEditForm, showEditForm }) {
    const [showUpdateForm, setShowUpdateForm] = useState(false);
    const [formData, setFormData] = useState(c);

    const tagIdArr = c.tags;
    const tagObjs = tags.filter((t) => tagIdArr.includes(t._id))
    const tagDivs = tagObjs.map((t, idx) => <button className="btn btn-default" key={idx} style={{backgroundColor: `${t.color}`}} onClick={function(){alert('Clicked')}}>{t.text}</button>)

    return (
        <div>
            {showEditForm ? 
            <>
                <EditChoreForm c={c} handleUpdate={handleUpdate} tags={tags} setShowEditForm={setShowEditForm} showEditForm={showEditForm}/> 
                <button className="btn btn-default" onClick={() => setShowEditForm(!showEditForm)}>cancel</button>
            </>
            : 
            <>
                <div>{c.text}</div> 
                <div>{tagDivs}</div>
                <button className="btn btn-default btn-xs" onClick={() => setShowEditForm(!showEditForm)}>edit</button>
                <button className="btn btn-default btn-xs" onClick={() => handleDelete(c._id)}>delete</button>
            </>
            }
        </div>
      );
}