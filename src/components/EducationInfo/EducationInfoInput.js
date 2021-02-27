import React from "react"

function EducationInfoInput(props) {
    const eduItem = <div>
        <form>
            <div>
                <label>School Name:
                    <input
                        name="schoolName"
                        type="text"
                        value={props.educationInfo.schoolName}
                        onChange={props.changeHandler}
                        placeholder="School name"
                    />
                </label>
            </div>
            
            <br />

            <div>
                <label>
                    Dates Attended:
                    <input
                        name="dateAttendedFrom"
                        type="month"
                        value={props.educationInfo.dateAttendedFrom}
                        onChange={props.changeHandler}
                        placeholder="From"
                    /> to
                    <input
                        name="dateAttendedTo"
                        type="month"
                        value={props.educationInfo.dateAttendedTo}
                        onChange={props.changeHandler}
                        placeholder="To"
                    />
                </label>
            </div>
            
            <br />
            
            <div>
                <label>Select Degree Type:
                    <select name="degree" value={props.educationInfo.degree} onChange={props.changeHandler}>
                        <option value="none">None</option>
                        <option value="High School or equivalent">High School or equivalent</option>
                        <option value="Associate">Associate</option>
                        <option value="Bachelor's">Bachelor's</option>
                        <option value="Master's">Master's</option>
                        <option value="Doctorate">Doctorate</option>
                        <option value="other">Other</option>
                    </select>
                </label>
            </div>
            
            <br />

            <div>
                <label>Field of Study:
                    <input
                            name="fieldOfStudy"
                            type="text"
                            value={props.educationInfo.fieldOfStudy}
                            onChange={props.changeHandler}
                            placeholder="Field of Study"
                        />
                </label>
            </div>
            
            <br />

            <div>
                <label>Location (e.g. Boston, MA):
                    <input
                            name="schoolLocation"
                            type="text"
                            value={props.educationInfo.schoolLocation}
                            onChange={props.changeHandler}
                            placeholder="Location"
                        />
                </label>
            </div>

        </form>
    </div>

    return (
        eduItem
    )
}

export default EducationInfoInput