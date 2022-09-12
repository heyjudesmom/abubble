import { useState } from "react";
import EditChoreForm from "../EditChoreForm/EditChoreForm";

export default function ChoreItem({ c, index, handleDelete, tags, handleUpdate, setShowEditForm, showEditForm }) {

    function handleClick() {
        setShowEditForm(c._id)
    }

    const tagIdArr = c.tags;
    const tagObjs = tags.filter((t) => tagIdArr.includes(t._id))
    const tagDivs = tagObjs.map((t, idx) => <button className="btn btn-sm" key={idx} style={{backgroundColor: `${t.color}`}} onClick={function(){alert('Clicked')}}>{t.text}</button>)

    return (
        <div>
            {showEditForm === c._id ? 
            <>
                <EditChoreForm c={c} handleUpdate={handleUpdate} tags={tags} setShowEditForm={setShowEditForm} showEditForm={showEditForm}/> 
                <button className="btn btn-xs" onClick={() => setShowEditForm("")}>cancel</button>
            </>
            : 
            <>
                <h2>{c.text}</h2> 
                <div>{tagDivs}</div>
                <button className="btn btn-default btn-xs" onClick={handleClick}>edit</button>
                <button className="btn btn-default btn-xs" onClick={() => handleDelete(c._id)}>delete</button>
            </>
            }
        </div>
      );
}