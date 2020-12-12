import React from "react"
import './mainScreenCollage.css'
import Button from '../../atom-bois/button/button'

const element = 
  <div>
    poop
    <img className="collage-item" src={require('../../image-doodads/mickey.jpg')} alt="poop" />
    <div className="collage-button">
      <Button title="butter is yummi"></Button>
    </div>
  </div>

export function MainScreenCollage() {
  return element;
} 