import "./ToDoItem.css";

export default function ToDoItem({ t, index, handleDelete, tags }) {
    const tagIdArr = t.tags;
    const tagObjs = tags.filter((t) => tagIdArr.includes(t._id))
    const tagDivs = tagObjs.map((t, idx) => <button className="btn btn-sm" key={idx} style={{backgroundColor: `${t.color}`}} onClick={function(){alert('Clicked')}}>{t.text}</button>)
    
    return (
        <div>
            <h2>{t.text}</h2> 
            <div>{tagDivs}</div>
            <button className="btn btn-xs" onClick={() => handleDelete(t._id)}>X</button>
        </div>
      );
}