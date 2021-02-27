import React from "react"

function EducationInfoDisplay(props) {

    return (
        <div>
            <div className="ei-display-school-name-container">
                <h1>
                    {props.educationInfo.schoolName}
                </h1>
            </div>
            <div className="ei-main-info-container">
                <p>{props.educationInfo.degree}</p>
                <p>{props.educationInfo.fieldOfStudy}</p>
                <p>{props.educationInfo.schoolLocation}</p>
                <p style={{color: "gray"}}>{props.educationInfo.dateAttendedFrom} - {props.educationInfo.dateAttendedTo}</p>
            </div>
        </div>
    )
}

export default EducationInfoDisplay