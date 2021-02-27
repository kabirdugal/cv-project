import React from "react"
import EducationInfo from "./EducationInfo"

function EducationOverview(props) {

    const {schoolArray} = props

    return (
        <div>
            {props.schoolArray.map(eduItem => {
                return <div key={eduItem}>
                    <EducationInfo 
                        editMode={props.editMode}
                    />
                    <button 
                        className="edu-delete-btn" 
                        name={schoolArray.indexOf(eduItem)} 
                        onClick={props.deleteItem} 
                        style={{visibility: "visible"}}
                    >Delete Education</button>
                </div>
            })}
        </div>
    )
}

export default EducationOverview