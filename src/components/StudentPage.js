import React from "react"
import { VictoryChart, VictoryTheme, VictoryBar, VictoryAxis } from "victory"

function StudentPage(props){
    const personData = props.data.filter(data => data.name === props.name)
    console.log(personData)
    return(
        <div>
            <VictoryChart theme={VictoryTheme.material} height={200} width={300} className="chart">
                <VictoryBar 
                    alignment="middle"
                    data={personData}
                    y="funfactor"
                    x="assignment"
                />
                <VictoryAxis 
                    label="Assingment"
                />
                <VictoryAxis dependentAxis 
                    label="Funfactor"
                />
            </VictoryChart>
        </div>
    )
}

export default StudentPage