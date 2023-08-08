export default function ScoreTwoPlayer() {
    const placeholderObject = {
        player1: {score: 0, name: "Mike"},
        player2: {score: 0, name: "Connor"}
    }


    return (
        <div className="two-player-score">
            <p className="scoreboard">{placeholderObject.player1.name} {placeholderObject.player1.score} - {placeholderObject.player2.score} {placeholderObject.player2.name}</p>
        </div>
    )
}