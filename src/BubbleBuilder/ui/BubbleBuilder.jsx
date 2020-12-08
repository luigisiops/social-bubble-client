import React, { useState } from "react"
// import { NavLink } from "react-router-dom"
import { connect } from "react-redux"
import "./BubbleBuilder.css"
import Navbar from "../../Navbar/Navbar"




function BubbleBuilder( props ) {
    // const test = ["Family", "Friends"]

    // const user = props.user

    const [bubble, setBubble] = useState({
        status: 'Green',
        rules: [],
        members: []
    })
    const [newRule, setNewRule] = useState("")
    const [newMember, setNewMember] = useState("")

    const handleBubbleChange = e => {
        setBubble({
            ...bubble,
            [e.target.name]: e.target.value
        })
    }

    // const handleBubbleRuleChange = e => {
    //     setBubble({
    //         ...bubble,
    //         'bubble-rules': [e.target.value]
    //     })
    // }

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

    const handleNewMemberChange = e => {
        setNewMember(e.target.value)
    }

    const handleAddMember = () => {
        let memberArray = bubble.members
        memberArray.push(newMember)

        setBubble({
            ...bubble,
            members: memberArray
        })
        setNewMember('')
    }

   



    return (
        <div className='bubble-builder-container'>

            <Navbar />

            <h1>BUBBLE BUILDER</h1>

            <input onChange={handleBubbleChange} name="bubble-name" type="text" placeholder="Bubble Name"></input>

            <input type="text" name='rules' placeholder='Bubble Rule...' value={newRule} onChange={handleNewRuleChange}></input>
            <button onClick={handleAddBubbleRule}>Add Rule</button>

            <input type="text" name="members" placeholder="Enter Member Email..." value={newMember} onChange={handleNewMemberChange}></input>
            <button onClick={handleAddMember}>Add Bubble Member</button>

            <button onClick={props.createBubble}>Create Bubble</button>

            

        </div>
    )
}

const mapStateToProps = state => {
    return({
        user: state.user
    })
}

const mapDispatchTopProps = dispatch => {
    return {
        createBubble: (user) => dispatch({ type: 'CREATE_BUBBLE', payload: user})
    }
}



export default connect(mapStateToProps,mapDispatchTopProps)(BubbleBuilder)