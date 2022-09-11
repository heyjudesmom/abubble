import "./MealPlanIndex.css";

export default function MealPlanIndex({plan}) {
    return (
        <div>
            <table className="table table-responsive table-condensed table-bordered">
            <thead>
                <tr>
                <th>sun</th>
                <th>mon</th>
                <th>tue</th>
                <th>wed</th>
                <th>thu</th>
                <th>fri</th>
                <th>sat</th>
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
        </div>
    );
}