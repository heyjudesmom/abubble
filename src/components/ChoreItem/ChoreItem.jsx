import { useState } from "react";
import EditChoreForm from "../EditChoreForm/EditChoreForm";

export default function ChoreItem({item, handleDelete, tags, handleUpdate, setShowEditForm, showEditForm, itemTags }) {

    function handleClick() {
        setShowEditForm(item._id)
    }
    return (
        <div>
            {showEditForm === item._id ? 
            <>
                <EditChoreForm c={item} handleUpdate={handleUpdate} tags={tags} setShowEditForm={setShowEditForm} showEditForm={showEditForm}/> 
                <button className="btn btn-xs" onClick={() => setShowEditForm("")}>cancel</button>
            </>
            : 
            <>
                <h2>{item.text}</h2> 
                <div>{itemTags}</div>
                <button className="btn btn-default btn-xs" onClick={handleClick}>edit</button>
                <button className="btn btn-default btn-xs" onClick={() => handleDelete(item._id)}>delete</button>
            </>
            }
        </div>
      );
}