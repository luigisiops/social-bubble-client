import React, { useDebugValue, useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { connect } from "react-redux"
import "./dashboard.css"
import GetUserBubbles from "../use-cases/getUserBubbles"

export const Dashboard = ({bubbles, getBubbles, GetUserBubbles}) => {
   
   useEffect (() => {
      getBubbles()
   })


   return (
      <div>Dashboard
      </div>
   )


}

const mapStateToProps = (state, {bubbles}) => {
   bubbles = state.bubbleList
}

const mapDispatchToProps = (dispatch) => {
   getBubbles: GetUserBubbles(dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)