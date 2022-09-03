import './TagsList.css'
export default function TagsList({ tags }) {
    const arr = tags.map((t, idx) => <div style={{backgroundColor:`${t.color}`}}key={idx}>{t.text}</div>)
    return (
        <div className="grid-ctr-list">
            {arr}
        </div>
    );
}