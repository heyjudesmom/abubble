export default function AppointmentItem({ a, index, handleDelete, tags }) {
    const tagIdArr = a.tags;
    const tagObjs = tags.filter((t) => tagIdArr.includes(t._id))
    const tagDivs = tagObjs.map((t, idx) => <button key={idx} style={{backgroundColor: `${t.color}`}} onClick={function(){alert('Clicked')}}>{t.text}</button>)
    
    return (
        <div className="page-list-item">
            <div>{a.title}</div> 
            <div>{a.datetime}</div> 
            <div>{a.duration} minutes</div> 
            <div>{tagDivs}</div>
            <button onClick={() => handleDelete(a._id)}>X</button>
            <br/><br/>
        </div>
      );
}