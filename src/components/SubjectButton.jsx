import React, {useState} from "react";
import {Button} from "react-bootstrap";


const SubjectButton = ({subjectIcon, subjectName}) => {
    console.log(subjectName);

    return (
        <Button variant="primary" className="d-flex align-items-center subjectButton">
            <img className="subjectButtonIcon" src={subjectIcon} alt="subject icon"/>
            <p className="subjectButtonText">{subjectName}</p>
        </Button>
    );
}

export default SubjectButton;