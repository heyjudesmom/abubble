export default function AppointmentItem({ a, index, handleDelete, tags }) {
    const tagIdArr = a.tags;
    const tagObjs = tags.filter((t) => tagIdArr.includes(t._id))
    const tagDivs = tagObjs.map((t, idx) => <button class="btn btn-default btn-xs" key={idx} style={{backgroundColor: `${t.color}`}} onClick={function(){alert('Clicked')}}>{t.text}</button>)
    let datestr = new Date(a.datetime).toLocaleString();
    a.datetime = datestr;
    
    return (
        <tbody>
        <tr>
            <td>{a.datetime}</td>
            <td>{a.title}</td>
            {a.duration ? (<td>{a.duration} minutes</td>) : <td></td>}
            {tagDivs.length ? (<td>{tagDivs}</td>) : <td></td>}
            <td><button class="btn btn-default btn-xs" onClick={() => handleDelete(a._id)}>X</button></td> 
        </tr> 
        </tbody>
      );
}