import React from "react"

function WorkInfoDisplay(props) {
    return (
        <div>
            <div className="wi-display-work-name-container">
                <h1>
                    {props.workInfo.jobTitle}
                </h1>
            </div>
            <div className="wi-main-info-container">
                <p>{props.workInfo.companyName}</p>
                <p>{props.workInfo.fieldOfStudy}</p>
                <p>{props.workInfo.workLocation}</p>
                <p style={{color: "gray"}}>{props.workInfo.dateWorkedFrom} - {props.workInfo.dateWorkedTo}</p>
                <p>{props.workInfo.description}</p>
            </div>
        </div>
    )
}

export default WorkInfoDisplay