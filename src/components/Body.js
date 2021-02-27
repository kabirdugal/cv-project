import React from "react"
import PersonalInfo from "./PersonalInfo/PersonalInfo"
import EducationOverview from "./EducationInfo/EducationOverview"
import WorkOverview from "./WorkInfo/WorkOverview"
import uniqid from "uniqid"

class Body extends React.Component {
    constructor() {
        super()
        this.state={
            editMode: true,
            schoolArray: [], 
            workArray: []
        }
        this.handleMode = this.handleMode.bind(this)
        this.handleEducation = this.handleEducation.bind(this)
        this.deleteEducation = this.deleteEducation.bind(this)
        this.handleWork = this.handleWork.bind(this)
        this.deleteWork = this.deleteWork.bind(this)
    }

    handleMode(event) {
        event.target.innerHTML === "Submit" ? event.target.innerHTML = "Edit" : event.target.innerHTML = "Submit"

        const addEduBtn = document.querySelector(".add-education-btn")
        const delEduBtns = document.querySelectorAll(".edu-delete-btn")
        const addWorkBtn = document.querySelector(".add-work-btn")
        const delWorkBtns = document.querySelectorAll(".work-delete-btn")
        addEduBtn.style.visibility === "visible" ? addEduBtn.style.visibility = "hidden" : addEduBtn.style.visibility = "visible"
        delEduBtns.forEach(btn => {btn.style.visibility === "visible" ? btn.style.visibility = "hidden" : btn.style.visibility = "visible"})
        addWorkBtn.style.visibility === "visible" ? addWorkBtn.style.visibility = "hidden" : addWorkBtn.style.visibility = "visible"
        delWorkBtns.forEach(btn => {btn.style.visibility === "visible" ? btn.style.visibility = "hidden" : btn.style.visibility = "visible"})

        this.setState(prevMode => {
            return {
                editMode: !prevMode.editMode,
                schoolArray: this.state.schoolArray
            }
            
        })
    }

    handleEducation() {
        this.setState({
                schoolArray: this.state.schoolArray.concat(uniqid())
            }
        )
        
    }

    deleteEducation(event) {
        this.state.schoolArray.splice(event.target.name, 1)
        this.setState({
            schoolArray: this.state.schoolArray
        })
    }

    handleWork() {
        this.setState({
            workArray: this.state.workArray.concat(uniqid())
        })
    }

    deleteWork(event) {
        this.state.workArray.splice(event.target.name, 1)
        this.setState({
            workArray: this.state.workArray
        })
    }

    render() {
        return (
            <div className="cv-container">
                <button 
                    className="mode-switch-btn" 
                    onClick={this.handleMode}
                >Submit</button>

                <div className="personal-info-container">
                    <PersonalInfo editMode={this.state.editMode} />
                </div>
                
                <button 
                    className="add-education-btn" 
                    onClick={this.handleEducation} 
                    style={{visibility: "visible"}}
                >Add Education</button>
                
                <div className="education-info-container">
                    <EducationOverview 
                        schoolArray={this.state.schoolArray} 
                        editMode={this.state.editMode} 
                        deleteItem={this.deleteEducation}
                    />
                </div>

                <button 
                    className="add-work-btn" 
                    onClick={this.handleWork} 
                    style={{visibility: "visible"}}
                >Add Work Experience</button>

                <div className="work-info-container">
                    <WorkOverview 
                        workArray={this.state.workArray} 
                        editMode={this.state.editMode} 
                        deleteItem={this.deleteWork} 
                    />
                </div>
            </div>
        )
    }
}

export default Body