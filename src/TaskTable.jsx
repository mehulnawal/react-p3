import employeeData from "./data/students.js";
import './index.css';

function TaskTable() {
    return (
        <>
            <h1 style={{ textAlign: "center" }}>📋 Task Table</h1>

            <table>
                <thead>
                    <tr>
                        <th>Task Id</th>
                        <th>First name</th>
                        <th>Job Title</th>
                        <th>Email</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        employeeData.map((data) => {
                            return (
                                <tr key={data["id"]}>
                                    <td>{data["id"]}</td>
                                    <td>{data["first_name"]}</td>
                                    <td>{data["job_title"]}</td>
                                    <td>{data["email"]}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>



        </>
    )
}

export default TaskTable;