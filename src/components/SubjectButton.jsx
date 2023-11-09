import React, {useState} from "react";
import {Button} from "react-bootstrap";


const SubjectButton = (subjectIcon, subjectName) => {
    const [icon, setIcon] = useState(subjectIcon);
    const [subject, setSubject] = useState(subjectName);

    return (
        <Button variant="primary" className="d-flex align-items-center subjectButton">
            <img className="subjectButtonIcon" src={require("../assets/icons/subject_sample.png")} alt="subject icon"/>
            <p className="subjectButtonText">언어와 매체</p>
        </Button>
    );
}

export default SubjectButton;