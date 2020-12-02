import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import { connect } from "react-redux"
import "./BubbleBuilder.css"


function BubbleBuilder( props ) {
    const test = ["Family", "Friends"]

    const user = props.user

    const [bubble, setBubble] = useState({
        status: 'Green',
        rules: []})

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

    const [newRule, setNewRule] = useState("")

    const handleNewRuleChange = e => {
        setNewRule(e.target.value)
    }

    const handleAddBubbleRule = () => {
        let ruleArray = bubble.rules
        ruleArray.push(newRule)

        setBubble({
            ...bubble,
            rules: ruleArray
        })

        setNewRule('')

    }

    return (
        <div className='bubble-builder-container'>
            
            <h1>BUBBLE BUILDER</h1>

            <input onChange={handleBubbleChange} name="bubble-name" type="text" placeholder="Bubble Name"></input>

            <input type="text" name='rules' placeholder='Bubble Rule...' value = {newRule} onChange = {handleNewRuleChange}></input>
            <button onClick={handleAddBubbleRule}>Add Rule</button>

            


        </div>
    )
}

const mapStateToProps = state => {
    return({
        user: state.user
    })
}



export default connect(mapStateToProps)(BubbleBuilder)