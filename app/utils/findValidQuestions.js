const findValidQuestions = (remainingAttributes, allQuestions) => {
    const remainingQuestions = []
    for (let attribute in remainingAttributes) {
        remainingAttributes[attribute].forEach(variation => {
            const question = allQuestions.filter(question => question.checkFor === variation.toString() && question.alienProp === attribute.toString())
            remainingQuestions.push(question[0])
            
        })
    }
    return remainingQuestions
}

export default findValidQuestions