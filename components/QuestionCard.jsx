"use client"
import { useEffect, useState } from 'react';
import generateQuestions from '../app/utils/GenerateQuestions';


export default function QuestionCard({alienObjects, setAlienObjects}) {
  const [validQuestions, setValidQuestions] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(()=>{
    generateQuestions(alienObjects).then((questions)=> {
      setValidQuestions(questions)
      setIsLoading(false)
    })
  }, [alienObjects])

  console.log(validQuestions)
  if (isLoading) {
    return <h1>loading</h1>
  }

  return (


      <div className="questioncard">
        <h1>{validQuestions.skinColour.length ? validQuestions.skinColour[0].question : null}</h1>
      </div>
    );

}

const chosenAlien = {
  name: 'klargon',
  colour: 'purple',
  horn_count: 2,
  eye_count: 3,
  eye_colour: 'red',
  hasAntenna: true,
  isFriendly: false,
  skinTexture: 'smooth',
};

const colourQuestion = [
  { alienProp: 'colour', checkFor: 'blue', question: 'is your alien blue?' },
  { alienProp: 'colour', checkFor: 'green', question: 'is your alien green?' },
  {
    alienProp: 'colour',
    checkFor: 'purple',
    question: 'is your alien purple?',
  },
];

const skinQuestion = [
  {
    alienProp: 'skinTexture',
    checkFor: 'furry',
    question: 'does your alien have fur?',
  },
  {
    alienProp: 'skinTexture',
    checkFor: 'scaly',
    question: 'does your alien have scales?',
  },
  {
    alienProp: 'skinTexture',
    checkFor: 'smooth',
    question: 'is your alien smooth?',
  },
];

// export default function Home() {
//   const [answer, setAnswer] = useState(null);
//   const [questionAsked, setQuestionAsked] = useState({
//     alienProp: '',
//     checkFor: '',
//     question: '',
//   });

//   function questionChecker(alienProp, checkFor) {
//     if (chosenAlien[alienProp] === checkFor) {
//       setAnswer(true);
//     } else {
//       setAnswer(false);
//     }
//   }

//   function handleSubmit(e) {
//     e.preventDefault();
//     questionChecker(questionAsked.alienProp, questionAsked.checkFor);
//   }


//   return (
//     <main>
//       <form onSubmit={(e) => handleSubmit(e)}>
//         <select
//           id="question"
//           onChange={(e) => {
//             const parsed = JSON.parse(e.target.value);
//             console.log(parsed);
//             questionAsked.alienProp = parsed.alienProp;
//             questionAsked.checkFor = parsed.checkFor;
//             questionAsked.question = parsed.question;
//             setQuestionAsked({ ...questionAsked });
//           }}
//         >
//           {colourQuestion.map((q) => {
//             return (
//               <option key={q.checkFor} value={JSON.stringify(q)}>
//                 {q.question}
//               </option>
//             );
//           })}
//         </select>
//         <button id="submit">Submit Question</button>
//       </form>
//       <div id="answer">
//         <p>{answer ? 'Yes' : 'No'}</p>
//       </div>
//     </main>
//   );
// }