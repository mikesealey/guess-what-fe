const chooseSecretAlien = (aliens) => {
    // let randomNum = Math.floor(Math.random() * aliens.length)
    // console.log(randomNum, "<<<<< random index")
    return aliens[Math.floor(Math.random() * aliens.length)]
}

export default chooseSecretAlien