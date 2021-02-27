import React from "react"

function PersonalInfoInput(props) {
    return (
        <div>
            <div className="pi-input-name-container">
                <input 
                    name="firstName" 
                    value={props.personalInfo.firstName} 
                    onChange={props.changeHandler} 
                    placeholder="First Name" 
                />
                <input 
                    name="lastName" 
                    value={props.personalInfo.lastName} 
                    onChange={props.changeHandler} 
                    placeholder="Last Name" 
                />
            </div>
            <div className="pi-input-personal-subinfo-container">
                <div className="pi-input-personal-subinfo-left">
                    <input 
                        name="email" 
                        value={props.personalInfo.email} 
                        onChange={props.changeHandler} 
                        placeholder="Email" 
                    />
                    <br />
                    <input 
                        name="phone" 
                        value={props.personalInfo.phone} 
                        onChange={props.changeHandler} 
                        placeholder="Phone Number" 
                    />
                </div>
                <div className="pi-input-personal-subinfo-right">
                    <input 
                        name="linkedinUrl" 
                        value={props.personalInfo.linkedinUrl} 
                        onChange={props.changeHandler} 
                        placeholder="Linkedin URL" 
                    />
                    <br />
                    <input 
                        name="githubUrl" 
                        value={props.personalInfo.githubUrl} 
                        onChange={props.changeHandler} 
                        placeholder="GitHub URL" 
                    />
                </div>
            </div>
        </div>
    )
}


export default PersonalInfoInput