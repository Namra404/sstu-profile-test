import React from 'react';

const Result = ({category}) => {
    const IT= ['ИФСТ','ПИНФ','ИВЧТ',"ПИНЖ"]
    const DRAW = ["РКЛМ","ТЛВД","ДИЗН"]
    let rez = ''
    if(category === "IT") rez = IT[Math.floor(Math.random() * IT.length)]
    else   rez = DRAW[ Math.floor(Math.random() * DRAW.length)]


    return (
        <div>
           <div className="rez">Спасибо что потратили время! </div>
            <div className="naprav">
               <div className="trext"> Наш искусственный интеллект рекомендует вам поступить на...</div>
                {
                 rez
                }
            </div>
        </div>
    );
};

export default Result;