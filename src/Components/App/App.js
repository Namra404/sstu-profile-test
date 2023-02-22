import React, {useState} from "react";
import UpBar from "../UpBar/UpBar";
import QuestionsForm from "../QuestionsForm/QuestionsForm";
import './App.css'
import {Route, Routes} from "react-router-dom";
import Result from "../Result/Result";

function App() {
    const [category, setCategory] = useState("")
    return (
        <div className="App">
            <UpBar/>
            <Routes>
                <Route path={"/"} element={
                    <QuestionsForm setCategory = {setCategory} />
                }/>
                <Route path={"/result"} element={<Result category ={category} />}/>
            </Routes>
        </div>
    )
        ;
}

export default App;
