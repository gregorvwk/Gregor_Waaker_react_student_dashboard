import React, { Component } from "react"
import { VictoryChart, VictoryAxis, VictoryTooltip, VictoryLine} from "victory"
import Assignments from "./Assignments"

class ChartsAssignment extends Component{
    constructor(){
        super()
        this.state = {
            assignmentData: []
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleData = this.handleData.bind(this)
    }

handleClick(assign){
    this.state.assignmentData.forEach(data => {
        if(data.assignment === assign){
            if(data.show === false){
                data.show = true
            }else if(data.show === true){
                data.show = false
            }
        }
    })
    this.forceUpdate()
}
handleData(){
    const newList = this.props.data.map(data => {
        return {...data, show: false}
    })
    this.setState({assignmentData: [...newList]})
}
componentDidMount(){
    this.handleData()
}
    render(){
        return(
            <div>
                <VictoryChart>
                    <VictoryLine 
                        domain={{y: [0,5]}}
                        alignment="middle"
                        data={this.state.assignmentData.filter(data => data.show === true)}
                        y={this.props.axis}
                        x="name" 
                        labelComponent={
                            <VictoryTooltip 
                                pointerLength={40}
                            />
                        }
                        style={{data: {
                            stroke: this.props.color
                        }}}
                        key={this.state.assignmentData.name + this.state.assignmentData.assignment}
                    />
                    <VictoryAxis 
                            label="Student"
                            style={{
                                axisLabel: { padding: 25, fontSize: 25},
                                tickLabels: { fontSize: 11}
                            }}
                        />
                        <VictoryAxis dependentAxis 
                            label={this.props.axis}
                            style={{
                                axisLabel: { padding: 30, fontSize: 25 },
                                tickLabels: {fontSize: 20, padding: 1},
                            }}
                        />
                </VictoryChart>
                <h3 style={{textAlign: "center"}}>Assignments</h3>
                <Assignments data={this.props.data} handleClick={this.handleClick}/>
            </div>
        )
    }
}
export default ChartsAssignment