import React, { useCallback, useEffect, useState } from "react";
import "./style.scss";
import { apiUpdateUserInfo } from "../../../../ConnectBE/axios";
import { getCookie } from "../../../../utils/common";
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
import {apiUserInfo} from "../../../../ConnectBE/axios";
import { useParams } from "react-router-dom";
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
  const [totalPoints, setTotalPoints] = useState(0);
  const [userInfo, setUserInfo] = useState(null);
const {event_id} = useParams()

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
          this.stopGame();
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



  useEffect(() => {
    const fetchUserInfo = async () => {
      let userId = getCookie("id");
      try {
        const data = await apiUserInfo(userId);
        let events_history = data ? data.events_history : [];
        let totalpoint = 0;
        const eventIndex = events_history.findIndex(event => event.event_id === event_id);
        if (eventIndex !== -1) {
            let history = events_history[eventIndex]
            setTotalPoints(history.total_points);
          }
        setUserInfo(data);
      } catch (error) {
        console.error('Error fetching user info:', error);
      }
    };

    fetchUserInfo();
  }, []);
//   create function if user win the game, plus 1 point for user and call api to update user history event

const handleWin = (newTotalPoints) => {
    let userId = getCookie("id");
    console.log(userId)
    let events_history_new = {
      event_id: event_id,
      total_points: newTotalPoints,
      created_at: new Date().toISOString()
    };
    console.log(userInfo)
    let events_history = userInfo ? userInfo.events_history : [];
    console.log(events_history)
    const eventIndex = events_history.findIndex(event => event.event_id === event_id);
    console.log(eventIndex)
    if (eventIndex !== -1) {
      events_history[eventIndex] = events_history_new;
    } else {
      events_history.push(events_history_new);
    }
    console.log(newTotalPoints)
    apiUpdateUserInfo( {userId:userId, events_history: events_history })
      .then(() => {
        console.log('User points and event history updated successfully');
      })
      .catch((error) => {
        console.error('Error updating user points and event history:', error);
      });
  };
//   setTimeout for handle win 1000ms
useEffect(() => {
    const interval = setInterval(() => {
      setTotalPoints(prevTotalPoints => {
        const newTotalPoints = prevTotalPoints + 1;
        handleWin(newTotalPoints);
        return newTotalPoints;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);
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
    if (winCount === cards.length / 2){
        setTotalPoints(prevTotalPoints => {
            const newTotalPoints = prevTotalPoints + 1;
            handleWin(newTotalPoints);
            return newTotalPoints;
          });
    }
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
