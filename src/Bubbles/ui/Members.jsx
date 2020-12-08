import React, { useEffect} from 'react'
// import { NavLink } from "react-router-dom"
import {connect} from "react-redux"
import {GetBubbleUsers} from '../use-cases/getBubbleUsers'


export const Members = ({getBubbleUsers}) => {

    useEffect(()=> {
        getBubbleUsers(8)
    },[getBubbleUsers])

    return (
        <div>
            <div>Place Holder</div>
            <div>Toggle</div>
            <div>Members</div>
            <div>Status</div>

            <div>Total</div>
        </div>

    )

}

const mapStateToProps = (state, {users}) => ({
    bubbleUsers: state.bubbleUsers
})

const mapDispatchToProps = (dispatch) => ({
    getBubbleUsers: GetBubbleUsers(dispatch)
})


export default connect(mapStateToProps, mapDispatchToProps)(Members)

