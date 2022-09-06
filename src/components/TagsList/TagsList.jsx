import './TagsList.css'
import TagItem from './TagItem';
export default function TagsList({ tags }) {
    const arr = tags.map((t, idx) => <TagItem key={idx} t={t} />)
    return (
        <div className="grid-ctr-list">
            {arr}
        </div>
    );
}