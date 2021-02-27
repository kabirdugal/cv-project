import React from "react"
import WorkInfo from "./WorkInfo"

function WorkOverview(props) {

    const {workArray} = props

    return (
        <div>
            {props.workArray.map(workItem => {
                return <div key={workItem}>
                    <WorkInfo 
                        editMode={props.editMode}
                    />
                    <button 
                        className="work-delete-btn" 
                        name={workArray.indexOf(workItem)} 
                        onClick={props.deleteItem} 
                        style={{visibility: "visible"}}
                    >Delete Work Experience</button>
                </div>
            })}
        </div>
    )
}

export default WorkOverview