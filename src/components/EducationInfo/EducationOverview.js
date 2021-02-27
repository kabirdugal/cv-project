import React from "react"
import EducationInfo from "./EducationInfo"

function EducationOverview(props) {

    const {schoolArray} = props

    return (
        <div className="education-element">
            {props.schoolArray.map(eduItem => {
                return <div key={eduItem}>
                    <EducationInfo 
                        editMode={props.editMode}
                    />
                    <div className="edu-delete-btn-container">
                        <button 
                            className="edu-delete-btn" 
                            name={schoolArray.indexOf(eduItem)} 
                            onClick={props.deleteItem} 
                            style={{visibility: "visible"}}
                        >Delete</button>
                    </div>
                    
                </div>
            })}
        </div>
    )
}

export default EducationOverview