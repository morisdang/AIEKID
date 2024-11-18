import React, { useState, useEffect } from "react";

import "./style.scss";

const GuessWordGame = () => {
  const jobsObject = {
    "👨🏼‍🏫🏫": "Teacher",
    "🚓👮🏻": "Police",
    "💊🥼💉": "Doctor",
    "🌾👨🏼‍🌾": "Farmer",
    "💇‍♂💈": "Barber",
    "👩‍🎤🎤": "Singer",
    "👨🏻‍🚀🚀": "Astronaut",
    "🌳🪓": "Carpenter",
    "✈️👨‍✈️": "Pilot",
    "⚖": "Lawyer",
    "🚒👨🏻‍🚒": "Firefighter",
    "👩‍🍳": "Chef",
    "⚽": "Football player",
    "🔎🕵️‍♀️": "Detective",
    "🎭": "Actor",
    "🎬🎥": "Film Director",
  };

  const [hints] = useState(Object.keys(jobsObject));
  const [randomHint, setRandomHint] = useState("");
  const [randomWord, setRandomWord] = useState("");
  const [winCount, setWinCount] = useState(0);
  const [lossCount, setLossCount] = useState(5);
  const [gameStarted, setGameStarted] = useState(false);
  const [userInput, setUserInput] = useState([]);
  const [usedLetters, setUsedLetters] = useState(new Set());
  const [gameResult, setGameResult] = useState("");

  const generateRandomValue = (array) =>
    Math.floor(Math.random() * array.length);

  const generateWord = () => {
    const newRandomHint = hints[generateRandomValue(hints)];
    const newRandomWord = jobsObject[newRandomHint];
    setRandomHint(newRandomHint);
    setRandomWord(newRandomWord);

    const initialDisplay = newRandomWord
      .split("")
      .map((value) => (value === " " ? " " : "_"));
    setUserInput(initialDisplay);
    setWinCount(newRandomWord.split(" ").length - 1);
  };

  const init = () => {
    setWinCount(0);
    setLossCount(5);
    setUsedLetters(new Set());
    setGameResult("");
    generateWord();
  };

  const handleLetterClick = (letter) => {
    const charArray = randomWord.toUpperCase().split("");
    const newUsedLetters = new Set(usedLetters);
    newUsedLetters.add(letter);
    setUsedLetters(newUsedLetters);

    if (charArray.includes(letter)) {
      const newUserInput = [...userInput];
      let newWinCount = winCount;

      charArray.forEach((char, index) => {
        if (char === letter && newUserInput[index] === "_") {
          newUserInput[index] = char;
          newWinCount++;
        }
      });

      setUserInput(newUserInput);
      setWinCount(newWinCount);

      if (newWinCount === randomWord.replace(/\s/g, "").length) {
        setGameResult("Bạn Chiến Thắng!");
      }
    } else {
      const newLossCount = lossCount - 1;
      setLossCount(newLossCount);

      if (newLossCount === 0) {
        setGameResult("Bạn Thua!");
      }
    }
  };

  const startGame = () => {
    setGameStarted(true);
    init();
  };

  return (
    <div className="guess-word-container">
      <div className="wrapper">
        <div className="num-of-tries-left">
          <span id="chanceCount">
            Số lần được đoán sai còn lại: {lossCount}
          </span>
        </div>

        <div className="container">{randomHint}</div>

        <div
          id="letter-container"
          className={!gameStarted || gameResult ? "hide" : ""}
        >
          {Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ").map((letter) => (
            <button
              key={letter}
              onClick={() => handleLetterClick(letter)}
              disabled={usedLetters.has(letter)}
              className={`letters ${usedLetters.has(letter) ? "used" : ""}`}
            >
              {letter}
            </button>
          ))}
        </div>

        <div id="userInputSection">
          {userInput.map((char, index) => (
            <span key={index} className="inputSpace">
              {char}
            </span>
          ))}
        </div>
      </div>

      <div
        className={`controls-container ${gameStarted && !gameResult ? "hide" : ""}`}
      >
        <button id="start" onClick={startGame}>
          Bắt đầu
        </button>
      </div>

      {gameResult && (
        <div id="result" className="game-result">
          {gameResult}
        </div>
      )}
    </div>
  );
};

export default GuessWordGame;
