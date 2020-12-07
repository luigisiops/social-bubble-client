import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import {connect} from "react-redux"
import {GetBubbleUsers} from '../use-cases/getBubbleUsers'
import { Button } from 'semantic-ui-react'
import Nav from "../../login/ui/nav"




export const Members = ({getBubbleUsers}) => {
    const bubbleId = 2


    useEffect(()=> {
        getBubbleUsers(8)
    },[])

    return (
        <div className="bubbles-container">
            <Nav/>
            <h1 className="bubble-title">Family</h1>
            <div className="toggle">
            <Link to = {`/bubbles/${bubbleId}}`}><Button className="links" basic color='blue'>Activities</Button> </Link>
            <Link to ={`/members/${bubbleId}}`}><Button className="links" basic color='blue'>Members</Button></Link>

            </div>
            <div className="bubble-status">This bubble is at risk!</div>      
                
        </div>
    )
}


const mapStateToProps = (state, {users}) => ({
    bubbleUsers: state.bubbleUsers
})

const mapDispatchToProps = (dispatch) => ({
    getBubbleUsers: GetBubbleUsers(dispatch),
    //addBubbleUsers: AddBubbleUsers(dispatch)
})


export default connect(mapStateToProps, mapDispatchToProps)(Members)

