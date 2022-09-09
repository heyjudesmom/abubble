export default function MealPlanIndex({plan}) {
    return (
        <main className="meal-table">
            <table>
            <thead>
                <tr>
                <th>Sun</th>
                <th>Mon</th>
                <th>Tue</th>
                <th>Wed</th>
                <th>Thu</th>
                <th>Fri</th>
                <th>Sat</th>
                </tr>
                <tr>
                <td>{plan.sun}</td>
                <td>{plan.mon}</td>
                <td>{plan.tue}</td>
                <td>{plan.wed}</td>
                <td>{plan.thu}</td>
                <td>{plan.fri}</td>
                <td>{plan.sat}</td>
                </tr>
            </thead>
            </table>
        </main>
    );
}