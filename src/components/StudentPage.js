import React from "react"

function StudentPage(props){
    console.log(props.name.name)
    return(
        <div>
            <h1>{props.name.name}</h1>
            <h2>check</h2>
        </div>
    )
}

export default StudentPage