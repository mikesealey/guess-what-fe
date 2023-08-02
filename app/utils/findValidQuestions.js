const findValidQuestions = (remainingAttributes, allQuestions) => {
    const remainingQuestions = {}
    for (let attribute in remainingAttributes) {
        remainingQuestions[attribute] = []
        remainingAttributes[attribute].forEach(variation => {
            const question = allQuestions[0][attribute].filter(question => question.checkFor === variation.toString())
            remainingQuestions[attribute].push(question[0])
            
        })
    }
    return remainingQuestions
}

export default findValidQuestions