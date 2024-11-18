import React, { useState, useEffect, Fragment } from "react";
import './scss/PlayGameInterface.scss';
import TextareaAutoSize from './TextareaAutoSize';
import PreviewFileUpLoad from './PreviewFileUpLoad';
import Clock from "./Clock";
import Transpose from "./Transpose";
import EndGame from "./EndGame";
import { confirmPIN } from '../../../ConnectBE/axios';
import { multipleChoiceType, trueFalseType, multipleChoiceIcon, trueFalseIcon } from '../../../utils/constant';
import doremon from '../../../assests/doremon.jpg'
import { useNavigate } from "react-router";
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';
const fabStyle = {
    position: 'absolute',
    top: 16,
    right: 16,
  };

const options1 = [
    { value: '1', label: 'Quiz' },
    { value: '2', label: 'True or False' },
];
const options2 = [
    { value: '1', label: '5 seconds' },
    { value: '2', label: '15 seconds' },
    { value: '3', label: '20 seconds' },
    { value: '4', label: '30 seconds' },

];
const options3 = [
    { value: '1', label: 'Standard' },
    { value: '2', label: 'Double points' },
    { value: '3', label: 'No points' },
];
const options4 = [
    { value: '1', label: 'Single-select' },
    { value: '2', label: 'Multi-select' },
];

import { useParams } from 'react-router-dom';
const PlayGameInterface = () => {
    const [currentId, setCurrentId] = useState(-1);
    const [ansCorrect, setAnsCorrect] = useState("");
    const [currentChoice, setCurrentChoice] = useState("");
    const [historyChoice, setHistoryChoice] = useState([]);
    const [iconClass, setIconClass] = useState([]);
    const [pointType, setPointType] = useState({ value: '1', label: 'Standard' });
    const [questions, setQuestions] = useState({ 1: '', 2: '', 3: '', 4: '' });
    const [selectType, setSelectType] = useState({ value: '1', label: 'Single-select' });
    const [timeLimit, setTimeLimit] = useState({ value: '1', label: '5 seconds' });
    const [timeNumber, setTimeNumber] = useState(5);
    const [title, setTitle] = useState("");
    const [type, setType] = useState({ value: '1', label: 'Quiz' });
    const [conmeo, setConmeo] = useState([]);
    const [previewImage, setPreviewImage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [correct, setCorrect] = useState(false);
    const [keyAns, setKeyAns] = useState('');
    const [endGame, setEndGame] = useState(false);
    const [isTimeOff, setIsTimeOff] = useState(false);
    const { event_id } = useParams();
    const navigate = useNavigate();

    const changeIcon = (type = { value: '1', label: 'Quiz' }) => {
        let iconClass = [];
        if (type.value === '1') {
            iconClass = multipleChoiceIcon;
        } else if (type.value === '2') {
            iconClass = trueFalseIcon;
        }
        return iconClass;
    };

    // Filter and format time limit for each question
    const handleFilterTimeLimit = (timeLimit) => {
        let time = timeLimit.label.split("seconds")[0].trim();
        return +time;
    };

    // Increment the current question ID and set the new slide's data
    const handleIncreaseCurrentId = () => {
        const nextId = currentId + 1;
        if (conmeo.length >0){
            const currentSlide = conmeo[nextId];
            if (currentSlide === "end") {
                setEndGame(true);
            } else {
                const iconClass = changeIcon(currentSlide.type);
                const timeNumber = handleFilterTimeLimit(currentSlide.timeLimit);
    
                setCurrentId(nextId);
                setAnsCorrect(currentSlide.ansCorrect);
                setPointType(currentSlide.pointType);
                setQuestions(currentSlide.questions);
                setSelectType(currentSlide.selectType);
                setTimeLimit(currentSlide.timeLimit);
                setTimeNumber(timeNumber);
                setTitle(currentSlide.title);
                setType(currentSlide.type);
                setPreviewImage(currentSlide.previewImage);
                setIconClass(iconClass);
                setKeyAns("");
                setCurrentChoice("")
            }
        }

    };

    // Handle the answer selection
    const handleCheckAns = (key) => {
        setIsLoading(true);
        setCorrect(ansCorrect === key);
    };
    const handleChosen = (key) => {
        if (!isNaN(key)) {
            setIsLoading(true);
            setCurrentChoice(key)
            setHistoryChoice([...historyChoice, key])
            
        }

    };

    // Handle timeout event
    const handleTimeOff = () => {
        const isTranspose = conmeo[currentId + 1] 
        setEndGame(isTranspose === 'end');
        setIsTimeOff(isTranspose !== 'end');
        setIsLoading(false);
    };

    // Turn off the transpose (timer) and move to the next question
    const handleOffTranspose = () => {

        setIsTimeOff(false);
        setIsLoading(false);
        handleIncreaseCurrentId();
    };
    const exitQuiz = (e) => {
        navigate('/event')
    };

    // Initial data loading and validation
    useEffect(() => {
        const fetchData = () => {
            // let res = await confirmPIN(event_id);
            // let parsedData = JSON.parse(res.response.conmeo);
            // parsedData.push("end");
            let parsedData = [
                {
                    type: { value: '1', label: 'Quiz' }, 
                    title: 'What is the capital of France?', 
                    questions: { 1: 'Berlin', 2: 'Paris', 3: 'Madrid', 4: 'Rome' }, 
                    ansCorrect: '2', 
                    pointType: { value: '1', label: 'Standard' }, 
                    selectType: { value: '1', label: 'Single-select' }, 
                    timeLimit: { value: '1', label: '5 seconds' }, 
                    previewImage: doremon 
                },
                {
                    type: { value: '2', label: 'True or False' }, 
                    title: 'The Earth is flat.', 
                    questions: { 1: 'True', 2: 'False' },
                    ansCorrect: '2', 
                    pointType: { value: '2', label: 'Double points' },
                    selectType: { value: '1', label: 'Single-select' },
                    timeLimit: { value: '2', label: '15 seconds' },
                    previewImage: doremon
                },
                "end" 
            ];
            setConmeo(parsedData);
        };
        fetchData();
    }, []);
    useEffect(() => {
        handleIncreaseCurrentId()
    }, [conmeo]);

    return (
        <div className="App">
            {isLoading && <div className="loading"></div>}

            {endGame ? (
                <EndGame />
            ) : (
                <div className="wrapper_play_game">
                    <div className='create_slide-container'>
                        {isTimeOff && (
                            <Transpose
                                count_down={timeNumber}
                                isShow={isTimeOff}
                                handleTimeOff={handleOffTranspose}
                            />
                        )}

                        <div className='row'>
                            <div className='col-6 main-create'>
                                <div className="input-container">
                                    <h1 className='title'>My Quiz!!!</h1>
                                    <Fab onClick={exitQuiz} sx={fabStyle} color="primary" aria-label="add">
                                        <AddIcon />
                                    </Fab>
                                    <TextareaAutoSize value={title} disabled />

                                    <Clock
                                        count_down={timeNumber}
                                        currentId={currentId}
                                        handleTimeOff={handleTimeOff}
                                    />
                                </div>

                                <PreviewFileUpLoad
                                    play_game="YES"
                                    previewImage={previewImage}
                                    isChooseFile={false}
                                />

                                <div className="QvsA">
                                    {questions && Object.entries(questions).map(([key, value], index) => (
                                        <div
                                            onClick={() => {handleChosen(key)}}
                                            key={index}
                                            className={`quesItem active ${iconClass[+key]}` + (currentChoice ? (currentChoice !== key ? " noChosen " : '') : "")}
                                        >
                                            <div className='icon-content'>
                                                <div className={`icon-ques ${iconClass[+key]}`}></div>
                                            </div>

                                            <textarea
                                                placeholder=""
                                                name={key}
                                                value={value}
                                                className={`inputQues active ${iconClass[+key]}`}
                                            ></textarea>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PlayGameInterface;
