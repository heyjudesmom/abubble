import { useNavigate } from "react-router-dom";

export default function ChoreItem({ c, index, handleDelete, tags  }) {
    const tagIdArr = c.tags;
    const tagObjs = tags.filter((t) => tagIdArr.includes(t._id))
    const tagDivs = tagObjs.map((t, idx) => <button key={idx} style={{backgroundColor: `${t.color}`}} onClick={function(){alert('Clicked')}}>{t.text}</button>)
    const navigate = useNavigate();

    function handleEdit() {

    }

    return (
        <div className="page-list-item">
            <button  onDoubleClick={()=>navigate(`/chores/${c._id}/edit`)}>Double Click to Edit</button>
            <div>{c.text}</div> 
            <div>{tagDivs}</div>
            <button onClick={() => handleDelete(c._id)}>X</button>
            <br/><br/>
        </div>
      );
}