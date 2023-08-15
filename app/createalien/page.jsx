"use client"

import { useState } from "react"

export default function CreateAlien(){

const alien = {
    "skinColour": ["purple", "blue", "green"],
    "skinTexture": ["normal", "scaly", "furry"],
    "eyes": [1, 2, 3, 4, 5],
    "horns": [0, 2, 4],
    "eyeColour": ["yellow", "orange", "red"],
    "isFriendly": [false, true],
    "hasAntenna": [false, true],
    "planet": ["lava", "desert", "ice"],
  }

  const [skinColourIndex, setSkinColourIndex] = useState(0)
  const [skinTextureIndex, setSkinTextureIndex] = useState(0)
  const [eyesIndex, setEyesIndex] = useState(0)
  const [eyeColourIndex, setEyeColourIndex] = useState(0)
  const [planetIndex, setPlanetIndex] = useState(0)

  function scramble() {
    setSkinColourIndex(Math.floor(Math.random() * alien.skinColour.length))
    setSkinTextureIndex(Math.floor(Math.random() * alien.skinTexture.length))
    setEyesIndex(Math.floor(Math.random() * alien.eyes.length))
    setEyeColourIndex(Math.floor(Math.random() * alien.eyeColour.length))
    setPlanetIndex(Math.floor(Math.random() * alien.planet.length))
  }

  function attributeSetter(attribute, increment) {
    if (attribute === "planet") {
        setPlanetIndex(planetIndex + increment)
        console.log(planetIndex)
    } else if (attribute === "skinTexture") {
        setSkinTextureIndex(skinTextureIndex + increment)
    } else if (attribute === "skinColour") {
        setSkinColourIndex(skinColourIndex + increment)
    } else if (attribute === "eyes") {
        setEyesIndex(eyesIndex + increment)
    } else if (attribute === "eyeColour") {
        setEyeColourIndex(eyeColourIndex + increment)
    }
  }

    return (
        <main>
            <div className="modal">
                <div className="text-box">
                    <h1>Create your own alien!</h1>

                        <div className="aliencard winner-card">
                        <img
          className="alien-planet"
          src={`assets/alien-layers/planet-${alien.planet[planetIndex]}.png`}
        />
        <img
          className="alien-body"
          src={`assets/alien-layers/body-${alien.skinColour[skinColourIndex]}-${alien.skinTexture[skinTextureIndex]}.png`}
        />
        <img
          className="alien-eyes"
          src={`assets/alien-layers/eyes-${alien.eyeColour[eyeColourIndex]}-${alien.eyes[eyesIndex]}.png`}
        />
        

                        </div>
                <div className="statsContainer">
                    <button className="question-submit-btn" onClick={()=>{scramble()}}>Scramble!</button> {/* Chose a better styling option that this! */}

                    <h3>planet</h3>
                    <button className="question-submit-btn" disabled={planetIndex === 0} onClick={()=>{attributeSetter("planet", -1)}}>{"<<"}</button>
                    <button className="question-submit-btn" >Random</button>
                    <button className="question-submit-btn" disabled={planetIndex === alien.planet.length-1} onClick={()=>{attributeSetter("planet", +1)}}>{">>"}</button>

                    <h3>Skin Texture</h3>
                    <button className="question-submit-btn" disabled={skinTextureIndex === 0} onClick={()=>{attributeSetter("skinTexture", -1)}}>{"<<"}</button>
                    <button className="question-submit-btn" >Random</button>
                    <button className="question-submit-btn" disabled={skinTextureIndex === alien.skinTexture.length-1} onClick={()=>{attributeSetter("skinTexture", +1)}}>{">>"}</button>

                    <h3>Skin Colour</h3>
                    <button className="question-submit-btn" disabled={skinColourIndex === 0} onClick={()=>{attributeSetter("skinColour", -1)}}>{"<<"}</button>
                    <button className="question-submit-btn" >Random</button>
                    <button className="question-submit-btn" disabled={skinColourIndex === alien.skinColour.length-1} onClick={()=>{attributeSetter("skinColour", +1)}}>{">>"}</button>

                    <h3>Eyes</h3>
                    <button className="question-submit-btn" disabled={eyesIndex === 0} onClick={()=>{attributeSetter("eyes", -1)}}>{"<<"}</button>
                    <button className="question-submit-btn" >Random</button>
                    <button className="question-submit-btn" disabled={eyesIndex === alien.eyes.length-1} onClick={()=>{attributeSetter("eyes", +1)}}>{">>"}</button>

                    <h3>Eye Colour</h3>
                    <button className="question-submit-btn" disabled={eyeColourIndex === 0} onClick={()=>{attributeSetter("eyeColour", -1)}}>{"<<"}</button>
                    <button className="question-submit-btn" >Random</button>
                    <button className="question-submit-btn" disabled={eyeColourIndex === alien.eyeColour.length-1} onClick={()=>{attributeSetter("eyeColour", +1)}}>{">>"}</button>

                </div>
                </div>
            </div>
        </main>
    )
}