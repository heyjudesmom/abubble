import './AppointmentList.css'

export default function AppointmentList({ appts }) {
    const arr = appts.map((a, idx) => <div key={idx}>{a.title} {a.datetime} {a.duration} minutes</div>)
    return (
        <div className="grid-ctr-list">
            {arr}
        </div>
    );
}