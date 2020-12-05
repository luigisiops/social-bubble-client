import React, { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { connect } from "react-redux"
import "./dashboard.css"
import { GetUserBubbles } from "../use-cases/getUserBubbles"

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
         <div>Dashboard
            <div>
               <div>ajfkdjlfa</div>
               <div>
                  {list.map((item) => (
                     <p key = {item.id}>{item.title}</p>
                  ))}
               </div>
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