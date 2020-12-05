import React, { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { connect } from "react-redux"
import "./dashboard.css"
import { GetUserBubbles } from "../use-cases/getUserBubbles"
import Navbar from "../../Navbar/Navbar"

export const Dashboard = ({ bubbles, getBubbles }) => {
   const [loading, setLoading] = useState(true)
   console.log(bubbles.bubbleList)
   useEffect(() => {
      getBubbles(10)
   }, [])


   if (bubbles.bubbleList === []) {
   }

   else {
      console.log(bubbles)
      const list = bubbles.bubbleList
      /*const content = list.map((item) => {
         <div>{item.title}</div>
      })*/

      return (
         <div className = "dashboard-container">

               <div className = "dashboard-username">John Smith</div>
               <img src = "stock-profile.png" className = "profile-image"></img>
               <div className = "dashboard-status"> You are risk </div>
               <input className = "status-input"></input>
               <div className = "bubble-lists"> Your Plans </div>
               <div>
                  {list.map((item) => (
                     <div className = "bubble-item" key = {item.id}>{item.title}</div>
                  ))}
               </div>


         </div>

      )
   }


}

const mapStateToProps = (state, { bubbles }) => ({
   bubbles: state.bubble
})

const mapDispatchToProps = (dispatch) => ({
   getBubbles: GetUserBubbles(dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)