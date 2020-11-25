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
        // this.addLine = this.addLine.bind(this)
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
    // this.addLine()
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
// addLine(){
//     const assignments = this.state.assignmentData.map(assignment => assignment.assignment)
//     const assignmentsSingle = Array.from(new Set(assignments))
//     const newAssignmentLine = this.state.assignmentData.map(data => {
//         const assignmentLine = assignmentsSingle.forEach(assign => {
//                 if(data.assignment === assign && data.show === true){
//                 console.log("check")
//                 return <VictoryLine 
//                             domain={{y: [0,5]}}
//                             alignment="middle"
//                             data={data}
//                             y={this.props.axis}
//                             x="name" 
//                             labelComponent={
//                                 <VictoryTooltip 
//                                     pointerLength={40}
//                                 />
//                             }
//                             style={{data: {
//                                 stroke: this.props.color
//                             }}}
//                             key={this.state.assignmentData.name + this.state.assignmentData.assignment}
//                         />
//                 }
//         })
//         return assignmentLine
//     })
//     return newAssignmentLine
// }
    render(){
        return(
            <div>
                <VictoryChart>
                    {/* {this.addLine()} */}
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