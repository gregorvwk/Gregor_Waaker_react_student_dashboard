import React from "react"

function Assignments(props){
    const assignmentsData = props.data.map(assign => assign.assignment)
    const assignmentToArray = Array.from(new Set(assignmentsData))
    const assignmentsToSingle = assignmentToArray.map(assign => {
        return(
            <li key={assign}>
                <input type="checkbox" onClick={() => props.handleClick(assign)} name="assignment"/>
                {assign}
            </li>
        )
    })
    return(
        <ul style={{ textAlign: "center", listStyle: "none"}}>
            {assignmentsToSingle}
        </ul>
    )
}

export default Assignments