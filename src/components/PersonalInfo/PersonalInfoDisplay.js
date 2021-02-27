import React from "react"

function PersonalInfoDisplay(props) {
    return (
        <div>
            <div className="pi-display-name-container">
                <h1>{props.personalInfo.firstName + " " + props.personalInfo.lastName}</h1>
            </div>
            <div className="pi-display-personal-subinfo-container">
                <div className="pi-display-personal-subinfo-left">
                    <p>{props.personalInfo.email}</p>
                    <p>{props.personalInfo.phone}</p>
                </div>
                <div className="pi-display-personal-subinfo-right">
                <p>{props.personalInfo.linkedinUrl}</p>
                    <p>{props.personalInfo.githubUrl}</p>
                </div>
            </div>
        </div>
    )
}

export default PersonalInfoDisplay