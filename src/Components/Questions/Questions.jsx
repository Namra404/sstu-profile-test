import React, {useState} from 'react';
import {Button, FormControlLabel, Radio} from "@mui/material";

const Questions = ({question, id, saveAnswer}) => {


    return (
        <div className="aboba">
            <div className="bobis">{question[id].text}</div>
            <div>{
                question[id].answerButton.map((answerButton,index) =>{
                    return <Button  onClick = {saveAnswer} variant="outlined" key={answerButton + index} >{answerButton}</Button>
                })}
            </div>
        </div>
    );
};

export default Questions;