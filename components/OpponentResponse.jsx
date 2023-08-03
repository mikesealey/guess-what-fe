import { useRef } from "react";

export const OpponentResponse = ({ answer }) => {
  const positiveResponse = [
    "Yes!",
    "How did you know?",
    "You're right!",
    "Correct!",
  ];
  const negativeResponse = ["Nope!", "No they don't", "False", "Wrong"];
  const responseDiv = useRef();

  let checked;

  if (answer === null) {
  }

  return (
    <div className="opponent-response">
      {answer !== null && (
        <img src="./assets/transparent-speech-bubble.png" className="w-40" />
      )}
      {answer && (
        <p>
          {
            positiveResponse[
              Math.floor(Math.random() * positiveResponse.length)
            ]
          }
        </p>
      )}
      {answer !== null && !answer && (
        <p>
          {
            negativeResponse[
              Math.floor(Math.random() * negativeResponse.length)
            ]
          }
        </p>
      )}
    </div>
  );
};
