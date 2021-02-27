import React from "react"
import EducationInfoInput from "./EducationInfoInput"
import EducationInfoDisplay from "./EducationInfoDisplay"

class EducationInfo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            schoolName: "",
            dateAttendedFrom: "",
            dateAttendedTo: "",
            degree: "",
            fieldOfStudy: "",
            schoolLocation: ""
        }
        this.educationInfoHandler = this.educationInfoHandler.bind(this)
    }

    educationInfoHandler(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    
    render() {
        
        return (
            this.props.editMode ? 
            <EducationInfoInput educationInfo={this.state} changeHandler={this.educationInfoHandler}/> : 
            <EducationInfoDisplay educationInfo={this.state}/>
        )
    }
}

export default EducationInfo