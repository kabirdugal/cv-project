import React from "react"
import PersonalInfoInput from "./PersonalInfoInput"
import PersonalInfoDisplay from "./PersonalInfoDisplay"

class PersonalInfo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            linkedinUrl: "",
            githubUrl: ""
        }
        this.personalInfoHandler = this.personalInfoHandler.bind(this)
    }

    personalInfoHandler(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            this.props.editMode ? 
            <PersonalInfoInput personalInfo={this.state} changeHandler={this.personalInfoHandler}/> : 
            <PersonalInfoDisplay personalInfo={this.state}/>
        )
    }
}

export default PersonalInfo