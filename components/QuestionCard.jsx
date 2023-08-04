'use client';
import { useEffect, useState } from 'react';
import generateQuestions from '../app/utils/GenerateQuestions';
import { OpponentContext } from '@/contexts/OpponentObject';
import { useContext } from 'react';
import { OpponentResponse } from './OpponentResponse';

export default function QuestionCard({
  setIsGameFinished,
  alienObjects,
  setAlienObjects,
  chosenAlien,
}) {
  const { opponentObject, setOpponentObject } = useContext(OpponentContext);
  const [validQuestions, setValidQuestions] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [indexer, setIndexer] = useState(0);
  const [answer, setAnswer] = useState(null);
  const [guess, setGuess] = useState(null);
  const [hasWon, setHasWon] = useState(null);
  

  useEffect(() => {
    generateQuestions(alienObjects).then((questions) => {
      if (questions.length && indexer >= questions.length) setIndexer(questions.length - 1)
      setValidQuestions(questions);
      setIsLoading(false);
    });
  }, [alienObjects]);

  

  if (isLoading) {
    return <h1>loading</h1>;
  }

  const indexIncrementer = (dir) => {
    setIndexer((indexer + dir + validQuestions.length) % validQuestions.length)
    setAnswer(null);
    setHasWon(null);
  };

  function questionChecker(alienProp, checkFor) {
    if (chosenAlien[alienProp] === checkFor) {
      setAnswer(true);
      const currentOpponent = { ...opponentObject };
      currentOpponent[alienProp] = checkFor;
      setOpponentObject(currentOpponent);
    } else {
      setAnswer(false);
    }
  }

  function handleSubmit() {
    questionChecker(
      validQuestions[indexer].alienProp,
      validQuestions[indexer].checkFor
    );
  }

  function submitGuess(e) {
    e.preventDefault();
    guessChecker(guess, chosenAlien);
  }

  function guessChecker(guess, chosenAlien) {
    if (guess === chosenAlien._id) {
      setHasWon(true);
      setOpponentObject(chosenAlien)
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
        {/* {answer === null ? null : answer ? (
          <p className="correct-answer">Yes</p>
        ) : (
          <p className="wrong-answer">No</p>
        )} */}

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
          {guess ? <button id="guess-btn">Guess</button> : null}
        </form>
        {hasWon === null ? null : hasWon ? (
          setIsGameFinished(true)) : null}
        
        <OpponentResponse answer={answer} hasWon={hasWon} />
      </div>
    );
  }
}
