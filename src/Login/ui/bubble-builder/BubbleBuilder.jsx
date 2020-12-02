import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import { connect } from "react-redux"
import "./BubbleBuilder.css"

function BubbleBuilder( props ) {

    const [bubble, setBubble] = useState({})

    const handleBubbleChange = e => {
        setBubble({
            ...bubble,
            [e.target.name]: e.target.value
        })
    }

    const handleBubbleRuleChange = e => {
        setBubble({
            ...bubble,
            'bubble-rules': [e.target.value]
        })
    }

    const handleAddBubbleRule = () => {

    }

    return (
        <div className='bubble-builder-container'>
            
            <h1>BUBBLE BUILDER</h1>

            <input onChange={handleBubbleChange} name="bubble-name" type="text" placeholder="Bubble Name"></input>

            <h2>Bubble Ground Rules</h2>
            <input onChange={handleBubbleRuleChange} name='bubble-rule' type="text" placeholder="Enter Bubble Rule..."></input>
            <button onClick={handleAddBubbleRule}>Add Rule</button>


        </div>
    )
}



export default BubbleBuilder