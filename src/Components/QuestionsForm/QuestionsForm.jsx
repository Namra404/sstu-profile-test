import React, {useState} from 'react';
import Questions from "../Questions/Questions";
import {Button, Stack} from "@mui/material";
import {useNavigate} from "react-router-dom";
const QuestionsForm = ({setCategory}) => {
    const navigate = useNavigate()
    const [question, setQuestions] = useState( [
        {
            id: 0,
            text: "IT или Творчество?",
            answer: "",
            category: 'IT',
            answerButton: ["IT", 'Draw']
        },{
            id: 1,
            text: "Тебе нравится страдать?",
            answer: "",
            category: "IT",
            answerButton:['ДА', 'ОЧЕНЬ']
        },{
            id: 2,
            text: "Тебе нравится телевиденье?",
            answer: "",
            category: "DRAW",
            answerButton:['Да', 'Нет']
        },{
            id: 3,
            text: "На сколько баллов сдал экзамен?",
            answer: "",
            category: "IT",
            answerButton:['180-220', '220-250', "250+"]
        },{
            id: 4,
            text: "Тебе нравятся низкоуровневые языки программирования?",
            answer: "",
            category: "IT",
            answerButton:['ДА', 'НЕТ']
        },{
            id: 5,
            text: "Нравится ли тебе профессия СММшика?",
            answer: "",
            category: "DRAW",
            answerButton:['Да', 'Нет']
        },{
            id: 6,
            text: "Перспектива стать дизайнером тебе нравится?",
            answer: "",
            category: "DRAW",
            answerButton:['Да',"Нет"]
        },{
            id: 7,
            text: "На какой форме обучения ты хочешь учиться??",
            answer: "",
            category: "DRAW",
            answerButton:['Очна', 'Очно-заочная',"Заочная","Все равно"]
        },{
            id: 8,
            text: "Какой фомат обучения тебе ближе?",
            answer: "",
            category: "IT",
            answerButton:['Очный', 'Заочный']
        },{
            id: 9,
            text: "Тебе нравится писать код?",
            answer: "",
            category: "IT",
            answerButton:['Да', 'Нет']
        }
    ]);

    const saveAnswer = (e) =>{
        question[id].answer = e.target.innerText
        if(id === 0) {
            category = question[0].answer;
            setCategory(category)
            question[0].category = category
            setQuestions(question.filter(q => q.category === category));
        }
        if(id+1 < question.length){
            setId(id + 1)
        }else navigate("/result")


    }
    let [id, setId] = useState(0);
    let category ="";
    return (
        <Stack maxWidth="500px" margin='50px auto'>
            <Questions question={question} id={id} saveAnswer={saveAnswer}/>
            {/*<Button variant="contained" onClick={nextQuestion} disabled={!question[id].answer}>далее</Button> //govno nerabochee (filter undef)*/}
        </Stack>
    );
};

export default QuestionsForm;