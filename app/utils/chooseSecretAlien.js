const chooseSecretAlien = (aliens) => {
    console.log(aliens, "<<<<< aliens")
    console.log(aliens[Math.floor(Math.random() * aliens.length)], "<<<<<<<<<<< CHOSEN ALIEN")
    return aliens[Math.floor(Math.random() * aliens.length)]
}

export default chooseSecretAlien