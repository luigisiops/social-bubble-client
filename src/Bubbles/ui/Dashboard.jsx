import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import "./dashboard.css"
import { GetUserBubbles } from "../use-cases/getUserBubbles"
import { GetBubbleUsers } from "../use-cases/getBubbleUsers"
import { AddNewBubble } from "../use-cases/addNewBubble"
import {UpdateUserStatus} from "../use-cases/updateUserStatus"

import { Image, Dropdown, Input, Button, Card, Header, Icon } from 'semantic-ui-react'
import Navbar from "../../Navbar/Navbar"


export const Dashboard = ({ bubbles, getBubbles, addNewBubble, getBubbleUsers, updateUserStatus, user}) => {
   let status = user.user.user_status


   const [loading, setLoading] = useState(true)
   const [adding, setAdding] = useState(false)
   const [fields, setFields] = useState({})
   const [userStatus, setUserStatus] = useState(status)
   const [statusText, setStatusText] = useState('Healthy')
   const userFullName = user.user.first_name + " " + user.user.last_name
   
   var statusComponent;
   if (status === 'green') {
      let statusText = "Healthy"
      statusComponent = <div>{statusText}</div>
    } else if (status === 'yellow') {
       let statusText = "At Risk"
       statusComponent = <div>{statusText}</div>

    } else if (status === 'red') {
      let statusText = "Sick"
      statusComponent = <div>{statusText}</div>
    }



   const setField = (evt) =>
      setFields({
         ...fields,
         [evt.target.name]: evt.target.value
      })

   console.log(bubbles.bubbleList)

   useEffect(() => {
      getBubbles(user.user.id)
   }, [])


   if (bubbles.bubbleList === []) {
   }

   else {
      const list = bubbles.bubbleList
      const userId = user.user.id
      
      const handleUpdateStatus = (evt) => {         
         setUserStatus(evt.target.value)
         
      }
      let width = window.innerWidth
      if (width > 768){
      return (
         <div>
            <Navbar />
         
         <div className="dashboard-container">
            <div className='nav-component-container'>
               {/* <Nav /> */}
               
            </div>
            <div className="dashboard-username">{userFullName}</div>
            <Image src="stock-profile.png" className={"profile-image image-" + status}/>
            <div className= {"dashboard-status " + status}>{statusComponent}</div>

            <div className="user-status-container">
            {/* <Dropdown className="select-status"
               placeholder='Select Status'
               fluid
               selection
               name = 'selected-status'
               onChange = {handleUpdateStatus}
            /> */}
            <select onChange={handleUpdateStatus}>
               <option value="green">I am healthy</option>
               <option value="yellow">I am at risk</option>
               <option value="red">I am sick</option>
            </select>
            <Button primary onClick = {() => {updateUserStatus(userId, userStatus)}}
               >Update Status</Button>
            </div>
            
            {(adding === true) ?
               <div className="add-to-bubble">
                  <Input className="status-input create-bubble-input" placeholder="Enter new bubble name..."
                     name="title"
                     type="text"
                     value={fields.title}
                     onChange={setField}>
                  </Input>
                  <button primary className="add-new-bubble-button" onClick={() => addNewBubble(fields, userId)}>Add</button>
               </div>
               :
               <Button primary onClick={() => setAdding(true)}>Create a new bubble</Button>
            }

            <div className="bubble-lists "> <h1 className="bubble-lists-title">Your Bubbles</h1> </div>
            <div>
               {list.map((item) => (
                  <Link to = {`/bubbles/${item.id}`} > 
                     <Card
                        key={item.id}
                        header={item.title}
                        meta='Test'
                        description='A group for friends'
                     >
                        <div className="card-headers">
                           <Header as='h3'>{item.title}</Header>
                        </div>
                     </Card>
                  </Link>
         
               ))}
            </div>
         </div>
         </div>
      )}
      else{
         return (
            <div>          
            <div className="dashboard-container">
               <div className='nav-component-container'>
                  {/* <Nav /> */}
                  
               </div>
               <div className="dashboard-username">{userFullName}</div>
               <Image src="stock-profile.png" className={"profile-image image-" + status}/>
               <div className= {"dashboard-status " + status}>{statusComponent}</div>
   
               <div className="user-status-container">
               {/* <Dropdown className="select-status"
                  placeholder='Select Status'
                  fluid
                  selection
                  name = 'selected-status'
                  onChange = {handleUpdateStatus}
               /> */}
               <select onChange={handleUpdateStatus}>
                  <option value="green">I am healthy</option>
                  <option value="yellow">I am at risk</option>
                  <option value="red">I am sick</option>
               </select>
               <Button primary onClick = {() => {updateUserStatus(userId, userStatus)}}
                  >Update Status</Button>
               </div>
               
               {(adding === true) ?
                  <div className="add-to-bubble">
                     <Input className="status-input create-bubble-input" placeholder="Enter new bubble name..."
                        name="title"
                        type="text"
                        value={fields.title}
                        onChange={setField}>
                     </Input>
                     <button primary className="add-new-bubble-button" onClick={() => addNewBubble(fields, userId)}>Add</button>
                  </div>
                  :
                  <Button primary onClick={() => setAdding(true)}>Create a new bubble</Button>
               }
   
               <div className="bubble-lists "> <h1 className="bubble-lists-title">Your Bubbles</h1> </div>
               <div>
                  {list.map((item) => (
                     <Link to = {`/bubbles/${item.id}`} > 
                        <Card
                           key={item.id}
                           header={item.title}
                           meta='Test'
                           description='A group for friends'
                        >
                           <div className="card-headers">
                              <Header as='h3'>{item.title}</Header>
                           </div>
                        </Card>
                     </Link>
            
                  ))}
               </div>
            </div>
            <Navbar />
            </div>
         )
      }
   }


}

const mapStateToProps = (state, { bubbles }) => ({
   bubbles: state.bubble,
   user: state.user
})

const mapDispatchToProps = (dispatch) => ({
   getBubbles: GetUserBubbles(dispatch),
   addNewBubble: AddNewBubble(dispatch),
   updateUserStatus: UpdateUserStatus(dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)