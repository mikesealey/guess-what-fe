import { useRef } from "react";

export const OpponentResponse = ({ answer }) => {
  const positiveResponse = [
    "Yes!",
    "How did you know?",
    "You're right!",
    "Correct!",
  ];
  const negativeResponse = ["Nope!", "No they don't", "False", "Wrong"];
  const responseDiv = useRef()

  if (answer === null) {
  }
    

  return (
    <div className="opponent-response">
      <img src="./assets/transparent-speech-bubbles-20.png" className="w-40" />
      <div ref={responseDiv}>

      </div>
      <img src="./assets/transparent-speech-bubble.png" className="w-40" />
      <div ref={responseDiv}></div>
      {answer && (
        <p>
          {
            positiveResponse[
              Math.floor(Math.random() * positiveResponse.length)
            ]
          }
        </p>
      )}
    </div>
  );
};
