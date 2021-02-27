import React from "react"


function WorkInfoInput(props) {
    const workItem = <div>
        <form>
            <div>
                <label>Job Title:
                    <input
                        name="jobTitle"
                        type="text"
                        value={props.workInfo.jobTitle}
                        onChange={props.changeHandler}
                        placeholder="Job Title"
                    />
                </label>
            </div>

            <br />

            <div>
                <label>
                    Company:
                    <input
                        name="companyName"
                        type="text"
                        value={props.workInfo.companyName}
                        onChange={props.changeHandler}
                        placeholder="Company Name"
                    />
                </label>
            </div>

            <br />

            <div>
                <label>
                    Dates Worked:
                    <input
                        name="dateWorkedFrom"
                        type="month"
                        value={props.workInfo.dateWorkedFrom}
                        onChange={props.changeHandler}
                        placeholder="From"
                    /> to
                    <input
                        name="dateWorkedTo"
                        type="month"
                        value={props.workInfo.dateWorkedTo}
                        onChange={props.changeHandler}
                        placeholder="To"
                    />
                </label>
            </div>

            <br />

            <div>
                <label>Location:
                    <input
                        name="workLocation"
                        type="text"
                        value={props.workInfo.workLocation}
                        onChange={props.changeHandler}
                        placeholder="Location"
                    />
                </label>
            </div>

            <br />

            <div>
                <label>Description:
                    <textarea
                        name="description"
                        rows="7"
                        value={props.workInfo.description}
                        onChange={props.changeHandler} 
                    />


                </label>
            </div>

        </form>
    </div>

    return (
        workItem
    )
 
}

export default WorkInfoInput