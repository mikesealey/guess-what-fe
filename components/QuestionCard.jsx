'use client';
import { useEffect, useState } from 'react';
import generateQuestions from '../app/utils/GenerateQuestions';
import { OpponentContext } from '@/contexts/OpponentObject';
import { useContext } from 'react';
import { OpponentResponse } from './OpponentResponse';
import { UserStatsContext } from '@/contexts/UserStats';

export default function QuestionCard({
  setIsGameFinished,
  alienObjects,
  chosenAlien,
  setHasWon,
  hasWon,
}) {
  const { opponentObject, setOpponentObject } = useContext(OpponentContext);
  const { statsObject, setStatsObject } = useContext(UserStatsContext);
  const [validQuestions, setValidQuestions] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [indexer, setIndexer] = useState(0);
  const [answer, setAnswer] = useState(null);
  const [guess, setGuess] = useState(null);

  const emptyAlienObject = {
    _id: [],
    skinColour: [],
    skinTexture: [],
    eyes: [],
    horns: [],
    eyeColour: [],
    isFriendly: [],
    hasAntenna: [],
    planet: [],
    isActive: [],
    __v: [],
    name: [],
  };
  const [possibilities, setPosibilities] = useState(emptyAlienObject);

  let possPlaceholder = { ...possibilities }; // Does this need to be here?
  function reduceRemainingPossibilities() {
    let remainingAliens = alienObjects.filter((alien) => {
      return alien.isActive;
    });
    remainingAliens.forEach((alien) => {
      possPlaceholder = emptyAlienObject;
      Object.keys(alien).forEach((attribute) => {
        if (!possPlaceholder[attribute].includes(alien[attribute])) {
          possPlaceholder[attribute].push(alien[attribute]);
        }
      });
    });
    setPosibilities(possPlaceholder);
  }

  useEffect(() => {
    generateQuestions(alienObjects).then((questions) => {
      if (questions.length && indexer >= questions.length)
        setIndexer(questions.length - 1);
      setValidQuestions(questions);
      reduceRemainingPossibilities();
      setIsLoading(false);
      setAnswer(null);
    });
    if (hasWon) setIsGameFinished(true);
  }, [alienObjects, hasWon]);

  if (isLoading) {
    return <h1>loading</h1>;
  }

  const indexIncrementer = (dir) => {
    setIndexer((indexer + dir + validQuestions.length) % validQuestions.length);
    setAnswer(null);
    setHasWon(null);
  };

  function questionChecker(alienProp, checkFor) {
    const currentOpponent = { ...opponentObject };
    if (chosenAlien[alienProp] === checkFor) {
      setAnswer(true);
      currentOpponent[alienProp] = checkFor;
      setOpponentObject(currentOpponent);
      possPlaceholder[alienProp] = [checkFor];
      setPosibilities(possPlaceholder);
    } else {
      setAnswer(false);
      possPlaceholder[alienProp].splice(
        possPlaceholder[alienProp].indexOf(checkFor),
        1
      );
      if (possPlaceholder[alienProp].length === 1) {
        currentOpponent[alienProp] = possPlaceholder[alienProp][0];
        setOpponentObject(currentOpponent);
      }
      setPosibilities(possPlaceholder);
    }
  }

  function handleSubmit() {
    questionChecker(
      validQuestions[indexer].alienProp,
      validQuestions[indexer].checkFor
    );
    updateScore();
  }

  function submitGuess(e) {
    e.preventDefault();
    guessChecker(guess, chosenAlien);
    updateScore();
  }

  function updateScore() {
    const currentStats = { ...statsObject };
    currentStats.score += 1;
    setStatsObject(currentStats);
  }

  function guessChecker(guess, chosenAlien) {
    if (guess === chosenAlien._id) {
      setHasWon(true);
      setOpponentObject(chosenAlien);
    } else {
      setHasWon(false);
    }
  }

  if (validQuestions.length) {
    return (
      <div className="questioncard">
        <div id="question-prompt-container">
          <p id="question-prompt">Does your alien have... </p>
          <button
            onClick={() => {
              indexIncrementer(-1);
            }}
            className="question-btn"
          >
            ←
          </button>
          <p id="question-variable">{validQuestions[indexer].question}</p>
          <button
            onClick={() => {
              indexIncrementer(+1);
            }}
            className="question-btn"
          >
            →
          </button>
          <button
            onClick={() => {
              handleSubmit();
            }}
            id="question-submit-btn"
          >
            Submit
          </button>
        </div>
        <form
          id="guess-form"
          onSubmit={(e) => {
            submitGuess(e);
          }}
        >
          <select
            onChange={(e) => {
              setGuess(e.target.value), setHasWon(null), setAnswer(null);
            }}
          >
            <option>Take a guess</option>
            {alienObjects.map((alien) => {
              if (alien.isActive) {
                return (
                  <option value={alien._id} key={alien.name}>
                    {alien.name}
                  </option>
                );
              }
            })}
          </select>
          {guess ? (
            <button className="guess-btn" id="guess-btn">
              Guess
            </button>
          ) : null}
        </form>
        <OpponentResponse answer={answer} hasWon={hasWon} />
      </div>
    );
  }
}
