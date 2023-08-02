import { useState } from "react"
import findRemainingAttributes from "./findRemainingAttributes"
// import testAliens from "./testAliens"
// import allQuestions from "./allQuestions"
import findValidQuestions from "./findValidQuestions"
import { getQuestions } from "./getAliens"




const generateQuestions = (aliens) => {
    const remainingAliens = aliens.filter(alien => alien.isActive)
    const remainingAttributes = findRemainingAttributes(remainingAliens)
    return getQuestions().then((allQuestions) => {
        console.log(allQuestions)
        return findValidQuestions(remainingAttributes, allQuestions)
    }).then((validQ) => {
        console.log(validQ)
        return validQ
    })

}

export default generateQuestions 