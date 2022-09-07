export default function ToDoItem({ t, index, handleDelete, tags }) {
    const tagIdArr = t.tags;
    const tagObjs = tags.filter((t) => tagIdArr.includes(t._id))
    const tagDivs = tagObjs.map((t, idx) => <button key={idx} style={{backgroundColor: `${t.color}`}} onClick={function(){alert('Clicked')}}>{t.text}</button>)
    
    return (
        <div className="page-list-item">
            <div>{t.text}</div> 
            <div>{tagDivs}</div>
            <button onClick={() => handleDelete(t._id)}>X</button>
            <br/><br/>
        </div>
      );
}