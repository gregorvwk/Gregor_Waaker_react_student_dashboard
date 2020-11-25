import React, { Component } from "react"
import AppData from "./AppData"
import App from "./App"

class AppContainer extends Component{
    constructor(){
        super()
        this.state = {
            studentData: AppData,
            studentNames: []
        }
        this.addStudentData = this.addStudentData.bind(this)
    }

    addStudentData(){
        const studentNames = this.state.studentData.map(name => name.name)
        const studentNamesSeparate = Array.from(new Set(studentNames))
        this.setState({studentNames: [...studentNamesSeparate]})
    }
    
    componentDidMount(){
        this.addStudentData()
    }
    
    render() {
        return(
            <div>
                <App data={this.state.studentData} names={this.state.studentNames}/>
            </div>
        )
    }
}

export default AppContainer