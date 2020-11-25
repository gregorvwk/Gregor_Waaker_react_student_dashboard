import React, { Component } from "react"
import { VictoryChart, VictoryAxis, VictoryTooltip, VictoryBar } from "victory"
import "./Charts.css"

class StudentCharts extends Component{
    constructor(){
        super()
        this.state ={
            dataWithLabel: []
        }
        this.AddLabel = this.AddLabel.bind(this)
    }
    
    AddLabel(){
        this.props.data.forEach(data => {
            this.setState(prevState => {
                const label = {...data, label: data.assignment}
                console.log(label)
                const withLabel = [...prevState.dataWithLabel, label]
                return {dataWithLabel: withLabel}
            })
        })
    }
    componentDidMount(){
        this.AddLabel()
    }

    render(){
        return(
            <div className="chart">
                <div className="chart-1">
                    <h2>Funfactor per assignment</h2>
                    <VictoryChart 
                        height={400} 
                        width={600} 
                    >
                    <VictoryBar
                        domain={{y: [0,5]}}
                        alignment="start"
                        data={this.state.dataWithLabel}
                        y="funfactor"
                        x="assignment" 
                        labelComponent={
                            <VictoryTooltip pointerLength={40} />
                        }
                        style={{data: {
                            fill: "red"
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
                        label="Funfactor"
                        style={{
                            axisLabel: { padding: 30, fontSize: 25 },
                            tickLabels: {fontSize: 20, padding: 1},
                        }}
                    />
                </VictoryChart>
                </div>
                <div className="chart-2">
                    <h2>Difficulty per assignment</h2>
                    <VictoryChart
                        height={400} 
                        width={600} 
                    >
                    <VictoryBar
                            domain={{y: [0,5]}}
                            alignment="start"
                            data={this.state.dataWithLabel}
                            y="difficulty"
                            x="assignment" 
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
                            label="Assingment"
                            style={{
                                tickLabels: { opacity: 0 },
                                axisLabel: { padding: 0, fontSize: 25}
                            }}
                        />
                        <VictoryAxis dependentAxis 
                            label="Difficulty"
                            style={{
                                axisLabel: { padding: 30, fontSize: 25 },
                                tickLabels: {fontSize: 20, padding: 1},
                            }}
                        />
                    </VictoryChart>
                </div>
            </div>
        )
    }
}

export default StudentCharts