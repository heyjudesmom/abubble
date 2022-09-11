export default function TagItem({t, handleDelete}) {
    
    return (
        <button className="btn btn-default"style={{backgroundColor: `${t.color}`}} onDoubleClick={() => handleDelete(t._id)}>
            {t.text}
        </button>
    );
}