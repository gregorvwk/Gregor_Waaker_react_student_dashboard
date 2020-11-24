import React from "react"
import StudentCharts from "./StudentCharts"
import "./StudentPage.css"

function StudentPage(props){
    const personData = props.data.filter(data => data.name === props.name)
    return(
        <div>
            <h1 className="Header">Student Dashboard</h1>
            <h2 className="student-name">{props.name}</h2>
            <div style={{width: "60rem", margin: "auto"}}>
                <StudentCharts data={personData} />
            </div>
        </div>
    )
}

export default StudentPage