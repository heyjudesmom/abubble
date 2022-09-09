export default function MealPlanIndex({plan}) {
    return (
        <main>
            <h2>This Week</h2>
            <div>Sunday</div>
            <div>{plan.sun}</div>
            <div>Monday</div>
            <div>{plan.mon}</div>
            <div>Tuesday</div>
            <div>{plan.tue}</div>
            <div>Wednesday</div>
            <div>{plan.wed}</div>
            <div>Thursday</div>
            <div>{plan.thu}</div>
            <div>Friday</div>
            <div>{plan.fri}</div>
            <div>Saturday</div>
            <div>{plan.sat}</div>
        </main>
    );
}