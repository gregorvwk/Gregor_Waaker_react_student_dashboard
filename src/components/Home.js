import React, { Component } from "react"
import Charts from "./Charts"

class Home extends Component{
    constructor(){
        super()
        this.state = {
            averageStudent: [],
            namesSingle: []
        }
        this.handleData = this.handleData.bind(this)
        this.handleDataNames = this.handleDataNames.bind(this)
    }

    handleData(){
        const assignments = this.props.data.map(assignment => assignment.assignment)
        const assignmentsSingle = Array.from(new Set(assignments))
        assignmentsSingle.forEach(assign => {
                const funfactorSeperate = this.props.data.filter(element => (element.assignment === assign)).reduce((prev, curr) => prev + curr.funfactor, 0) / 10
                const difficultySeperate = this.props.data.filter(element => (element.assignment === assign)).reduce((prev, curr) => prev + curr.difficulty, 0) / 10
                this.setState(prevState =>{
                    const newList = {assignment: assign , funfactor: funfactorSeperate, difficulty: difficultySeperate, label: "Assignment: " + assign + " Funfactor: " + funfactorSeperate + " Difficulty: " + difficultySeperate}
                    const newTotalList = [...prevState.averageStudent, newList]
                    return {averageStudent: newTotalList}
                })
        })
    }

    handleDataNames(){
        const names = this.props.data.map(name => name.name)
        const namesSingle = Array.from(new Set(names))
        namesSingle.forEach(name => {
            const funfactorSeperate = this.props.data.filter(element => (element.name === name)).reduce((prev, curr) => prev + curr.funfactor, 0) / 56
            const difficultySeperate = this.props.data.filter(element => (element.name === name)).reduce((prev, curr) => prev + curr.difficulty, 0) / 56
            this.setState(prevState =>{
                const newList = {name: name , funfactor: funfactorSeperate, difficulty: difficultySeperate, label: " Funfactor: " + funfactorSeperate.toFixed(2) + " Difficulty: " + difficultySeperate.toFixed(2) }
                const newTotalList = [...prevState.namesSingle, newList]
                return {namesSingle: newTotalList}
            })
        })
    }
    
    componentDidMount(){
        this.handleData()
        this.handleDataNames()
    }
    render(){
        return(
            <div>
                <h1 className="Header">Student Dashboard</h1>
                <div style={{width: "60rem", margin: "auto"}}>
                    <Charts data={this.state} studentData={this.props.data}/>
                    
                </div>
            </div>
        )
    }
}

export default Home