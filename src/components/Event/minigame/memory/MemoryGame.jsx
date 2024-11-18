import React, { useCallback, useEffect, useState } from "react";
import "./style.scss";

import bee from "../../../../assests/memory/bee.png";
import crocodile from "../../../../assests/memory/crocodile.png";
import macaw from "../../../../assests/memory/macaw.png";
import gorilla from "../../../../assests/memory/gorilla.png";
import tiger from "../../../../assests/memory/tiger.png";
import monkey from "../../../../assests/memory/monkey.png";
import chameleon from "../../../../assests/memory/chameleon.png";
import piranha from "../../../../assests/memory/piranha.png";
import anaconda from "../../../../assests/memory/anaconda.png";
import sloth from "../../../../assests/memory/sloth.png";
import cockatoo from "../../../../assests/memory/cockatoo.png";
import toucan from "../../../../assests/memory/toucan.png";

const items = [
  { name: "bee", image: bee },
  { name: "crocodile", image: crocodile },
  { name: "macaw", image: macaw },
  { name: "gorilla", image: gorilla },
  { name: "tiger", image: tiger },
  { name: "monkey", image: monkey },
  { name: "chameleon", image: chameleon },
  { name: "piranha", image: piranha },
  { name: "anaconda", image: anaconda },
  { name: "sloth", image: sloth },
  { name: "cockatoo", image: cockatoo },
  { name: "toucan", image: toucan },
];

const MemoryGame = () => {
  const [cards, setCards] = useState([]);
  const [movesCount, setMovesCount] = useState(0);
  const [firstCard, setFirstCard] = useState(null);
  const [secondCard, setSecondCard] = useState(null);
  const [duration, setDuration] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [winCount, setWinCount] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  const generateRandom = useCallback((size = 4) => {
    let tempArray = [...items];
    let cardValues = [];
    size = (size * size) / 2;
    for (let i = 0; i < size; i++) {
      const randomIndex = Math.floor(Math.random() * tempArray.length);
      cardValues.push(tempArray[randomIndex]);
      tempArray.splice(randomIndex, 1);
    }
    return cardValues;
  }, []);

  const matrixGenerator = useCallback((cardValues, size = 4) => {
    const duplicatedCards = [...cardValues, ...cardValues];
    const shuffledCards = duplicatedCards.sort(() => Math.random() - 0.5);
    return shuffledCards.map((card, index) => ({
      ...card,
      id: `${index}`,
      isFlipped: false,
      isMatched: false,
    }));
  }, []);

  useEffect(() => {
    let interval;
    if (gameStarted && !isGameOver) {
      interval = setInterval(() => {
        setDuration((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [gameStarted, isGameOver]);

  const handleCardClick = (clickedCard) => {
    if (!gameStarted || clickedCard.isMatched || clickedCard.isFlipped) return;

    const newCards = cards.map((card) =>
      card.id === clickedCard.id ? { ...card, isFlipped: true } : card
    );
    setCards(newCards);

    if (!firstCard) {
      setFirstCard(clickedCard);
    } else if (!secondCard) {
      setSecondCard(clickedCard);
      setMovesCount((prev) => prev + 1);

      if (firstCard.name === clickedCard.name) {
        const updatedCards = newCards.map((card) =>
          card.id === firstCard.id || card.id === clickedCard.id
            ? { ...card, isMatched: true }
            : card
        );
        setCards(updatedCards);
        setWinCount((prev) => prev + 1);
        setFirstCard(null);
        setSecondCard(null);

        if (winCount + 1 === cards.length / 2) {
          setIsGameOver(true);
          setGameStarted(false);
        }
      } else {
        setTimeout(() => {
          const resetCards = newCards.map((card) =>
            card.id === firstCard.id || card.id === clickedCard.id
              ? { ...card, isFlipped: false }
              : card
          );
          setCards(resetCards);
          setFirstCard(null);
          setSecondCard(null);
        }, 900);
      }
    }
  };

  const startGame = () => {
    const cardValues = generateRandom();
    const newCards = matrixGenerator(cardValues);
    setCards(newCards);
    setGameStarted(true);
    setIsGameOver(false);
    setMovesCount(0);
    setDuration(0);
    setWinCount(0);
    setFirstCard(null);
    setSecondCard(null);
  };

  const stopGame = () => {
    setGameStarted(false);
    setIsGameOver(true);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="memory-container">
      <div className="wrapper">
        <div className="stats-container">
          <div id="moves-count">
            <span>Số nước đi:</span> {movesCount}
          </div>
          <div id="time">
            <span>Thời gian:</span> {formatTime(duration)}
          </div>
        </div>

        <div
          className="game-container"
          style={{ gridTemplateColumns: `repeat(4, auto)` }}
        >
          {cards.map((card) => (
            <div
              key={card.id}
              className={`card-container ${card.isFlipped ? "flipped" : ""} ${
                card.isMatched ? "matched" : ""
              }`}
              onClick={() => handleCardClick(card)}
            >
              <div className="card-before">?</div>
              <div className="card-after">
                <img src={card.image} className="image" alt={card.name} />
              </div>
            </div>
          ))}
        </div>

        <button
          id="stop"
          className={`${!gameStarted ? "hide" : ""}`}
          onClick={stopGame}
        >
          Dừng game
        </button>

        <div className={`controls-container ${gameStarted ? "hide" : ""}`}>
          {isGameOver && winCount === cards.length / 2 && (
            <p id="result">
              <h2 className="result-win">Bạn thắng!</h2>
              <h4 className="result-win">Số nước đi: {movesCount}</h4>
            </p>
          )}
          <button id="start" onClick={startGame} style={{color: "#16425b"}}>
            Bắt đầu game
          </button>
        </div>
      </div>
    </div>
  );
};

export default MemoryGame;
