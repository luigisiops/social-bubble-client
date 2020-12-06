import React, { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { connect } from "react-redux"
import "./dashboard.css"
import { GetUserBubbles } from "../use-cases/getUserBubbles"
import {GetBubbleUsers} from "../use-cases/getBubbleUsers"
import{AddNewBubble} from "../use-cases/addNewBubble"
import Navbar from "../../Navbar/Navbar"

export const Dashboard = ({ bubbles, getBubbles, addNewBubble, getBubbleUsers }) => {
   const [loading, setLoading] = useState(true)
   const [adding, setAdding] = useState(false)
   const [fields, setFields] = useState({})

   const setField = (evt) => 
      setFields({
         ...fields,
         [evt.target.name]: evt.target.value
      })
   console.log(fields)

   console.log(bubbles.bubbleList)
   useEffect(() => {
      getBubbles(8)
   }, [])


   if (bubbles.bubbleList === []) {
   }

   else {
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

               {(adding === true) ?
               <div className = "add-to-bubble">
                  <input className = "status-input" placeholder = "Create new bubble" 
                     name = "title" 
                     type = "text" 
                     value ={fields.title} 
                     onChange = {setField}>
                  </input>
                  <button className ="" onClick = {() => addNewBubble(fields)}>Add</button>
               </div>
               :
               <button className = "add-bubble" onClick = {()=> setAdding(true)}>Create a new Bubble</button>
               }

               <div className = "bubble-lists"> Your Bubbles </div>
               <div>
                  {list.map((item) => (
                     <NavLink to ="/bubbles" className = "bubble-item" key = {item.id}>{item.title}</NavLink>
                  ))}
               </div>


         </div>

      )
   }


}

const mapStateToProps = (state, { bubbles }) => ({
   bubbles: state.bubble,
})

const mapDispatchToProps = (dispatch) => ({
   getBubbles: GetUserBubbles(dispatch),
   addNewBubble: AddNewBubble(dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)