import React from "react"
import WorkInfo from "./WorkInfo"

function WorkOverview(props) {

    const {workArray} = props

    return (
        <div className="work-element">
            {props.workArray.map(workItem => {
                return <div key={workItem}>
                    <WorkInfo 
                        editMode={props.editMode}
                    />
                    <div className="work-delete-btn-container">
                        <button 
                            className="work-delete-btn" 
                            name={workArray.indexOf(workItem)} 
                            onClick={props.deleteItem} 
                            style={{visibility: "visible"}}
                        >Delete</button>
                    </div>
                   
                </div>
            })}
        </div>
    )
}

export default WorkOverview