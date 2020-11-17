import React, { Component } from "react"
import { VictoryChart, VictoryTheme, VictoryBar, VictoryAxis } from "victory"
import "./Home.css"

class Home extends Component{
    constructor(){
        super()
        this.state = {
            funfactor: []
        }
        this.handleData = this.handleData.bind(this)
    }

    handleData(){
        const assignments = this.props.data.map(assignment => assignment.assignment)
        const assignmentsSingle = Array.from(new Set(assignments))
        assignmentsSingle.forEach(assign => {
                const funfactorSeperate = this.props.data.filter(element => (element.assignment === assign)).reduce((prev, curr) => prev + curr.funfactor, 0) / 10
                const difficultySeperate = this.props.data.filter(element => (element.assignment === assign)).reduce((prev, curr) => prev + curr.difficulty, 0) / 10
                this.setState(prevState =>{
                    const newList = {assignment: assign , funfactor: funfactorSeperate, difficulty: difficultySeperate}
                    const newTotalList = [...prevState.funfactor, newList]
                    return {funfactor: newTotalList}
                })
        })
    }
    
    componentDidMount(){
        this.handleData()
    }
    render(){
        return(
        <div>
            <h1>Student Dashboard</h1>
            <VictoryChart theme={VictoryTheme.material} height={200} width={300} className="chart">
                <VictoryBar 
                    alignment="middle"
                    data={this.state.funfactor}
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
            <VictoryChart theme={VictoryTheme.material} height={200} width={300} className="chart">
                <VictoryBar
                    alignment="middle"
                    data={this.state.funfactor}
                    y="difficulty"
                    x="assignment"
                />
                <VictoryAxis dependentAxis
                    label="Rating"
                />
                <VictoryAxis
                    label="Assignment"
                />
            </VictoryChart>
        </div>
    )
}
}

export default Home