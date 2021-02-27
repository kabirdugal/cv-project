import React from "react"
import WorkInfoInput from "./WorkInfoInput"
import WorkInfoDisplay from "./WorkInfoDisplay"

class WorkInfo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            jobTitle: "",
            companyName: "",
            dateWorkedFrom: "",
            dateWorkedTo: "",
            workLocation: "",
            description: "",
        }
        this.workInfoHandler = this.workInfoHandler.bind(this)
    }

    workInfoHandler(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            this.props.editMode ?
            <WorkInfoInput workInfo={this.state} changeHandler={this.workInfoHandler} /> :
            <WorkInfoDisplay workInfo={this.state} />
        )
    }
}


export default WorkInfo