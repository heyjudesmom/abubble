import './AppointmentList.css';
import AppointmentItem from '../AppointmentItem/AppointmentItem';

export default function AppointmentList({ appts, tags, handleDelete}) {
    if (!tags) return;

    const apptsArr = appts.map(function(a, idx) {
        return (
            <AppointmentItem a={a} key={idx} index={idx} handleDelete={handleDelete} tags={tags}/>
        );
    })
    
    return (
        <div className="grid-ctr-list">
            {apptsArr}
        </div>
    );
}