import React from "react"
import { VictoryChart, VictoryLine, VictoryAxis, VictoryTooltip, VictoryBar, VictoryVoronoiContainer } from "victory"
import "./Charts.css"
import ChartAssignment from "./ChartsAssignment"

function Charts(props){
    return(
        <div className="chart">
            <div className="chart-1">
                <h2>Gemiddelde per Assignment</h2>
                <VictoryChart 
                containerComponent={
                <VictoryVoronoiContainer 
                labelComponent={<VictoryTooltip cornerRadius={0} flyoutStyle={{fill: "white"}}/>}
                />
                }
            >
                <VictoryLine 
                    domain={{y: [0,5]}}
                    alignment="middle"
                    data={props.data.funfactor}
                    y="funfactor"
                    x="assignment" 
                    labelComponent={
                        <VictoryTooltip 
                            pointerLength={40}
                        />
                    }
                    style={{data: {
                        stroke: "red"
                    }}}
                />
                <VictoryLine
                domain={{y: [0,5]}}
                    alignment="middle"
                    data={props.data.funfactor}
                    y="difficulty"
                    x="assignment"
                    labelComponent={
                        <VictoryTooltip 
                            pointerLength={40}
                        />
                    }
                    style={{data: {
                        stroke: "blue"
                    }}}
                />
                <VictoryAxis 
                    label="Assingment"
                    style={{
                        tickLabels: { opacity: 0 },
                        axisLabel: { padding: 0, fontSize: 25}
                    }}
                />
                <VictoryAxis dependentAxis 
                    label="Funfactor and difficulty"
                    style={{
                        axisLabel: { padding: 30, fontSize: 25 },
                        tickLabels: {fontSize: 20, padding: 1},
                    }}
                />
            </VictoryChart>
            <p>Rood = Funfactor, blauw = Difficulty</p>
        </div>
        <div className="chart-2">
            <h2>Gemiddelde per Student</h2>
            <VictoryChart
                height={400} 
                width={600} 
            >
                <VictoryBar
                domain={{y: [0,5], x: [0,10]}}
                alignment="end"
                data={props.data.namesSingle}
                y="funfactor"
                x="name" 
                labelComponent={
                    <VictoryTooltip 
                        pointerLength={40}
                    />
                }
                style={{data: {
                    fill: "red"
                }}}
            />
            <VictoryBar
                domain={{y: [0,5], x: [0,10]}}
                    alignment="start"
                    data={props.data.namesSingle}
                    y="difficulty"
                    x="name"
                    labelComponent={
                        <VictoryTooltip 
                            pointerLength={40}
                        />
                    }
                    style={{data: {
                        fill: "blue"
                    }}}
                />    
                <VictoryAxis 
                    label="Student"
                    style={{
                        axisLabel: { padding: 25, fontSize: 25}
                    }}
                />
                <VictoryAxis dependentAxis 
                    label="Funfactor and difficulty"
                    style={{
                        axisLabel: { padding: 30, fontSize: 25 },
                        tickLabels: {fontSize: 20, padding: 1},
                    }}
                />
            </VictoryChart>
            <p>Rood = Funfactor, blauw = Difficulty</p>
        </div>
        <div >
            <h2>Funfactor per assignment</h2>
            <ChartAssignment data={props.studentData} axis="funfactor" color="red"/>
        </div>
        <div >
            <h2>Difficulty per assignment</h2>
            <ChartAssignment data={props.studentData} axis="difficulty" color="blue"/>
        </div>
    </div>
    )
}

export default Charts