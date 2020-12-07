import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import "./dashboard.css"
import { GetUserBubbles } from "../use-cases/getUserBubbles"
import { GetBubbleUsers } from "../use-cases/getBubbleUsers"
import { AddNewBubble } from "../use-cases/addNewBubble"
import Nav from "../../login/ui/nav"
import {UpdateUserStatus} from "../use-cases/updateUserStatus"

import { Image, Dropdown, Input, Button, Card, Header, Icon } from 'semantic-ui-react'


export const Dashboard = ({ bubbles, getBubbles, addNewBubble, getBubbleUsers, updateUserStatus}) => {
   const [loading, setLoading] = useState(true)
   const [adding, setAdding] = useState(false)
   const [fields, setFields] = useState({})
   const [userStatus, setUserStatus] = useState('green')

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
      const userId = 10
      
      const handleUpdateStatus = (evt) => {
         console.log(evt.target.value)
         
         
         
         setUserStatus(evt.target.value)
      }

      return (
         <div className="dashboard-container">
            <Nav />
            <div className="dashboard-username">John Smith</div>
            <Image src="stock-profile.png" className="profile-image" />
            <div className="dashboard-status"> You are at risk </div>

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
            <Button onClick = {() => updateUserStatus(userStatus)}>Update Status</Button>
            </div>
            
            {(adding === true) ?
               <div className="add-to-bubble">
                  <Input className="status-input" placeholder="Create new bubble"
                     name="title"
                     type="text"
                     value={fields.title}
                     onChange={setField}>
                  </Input>
                  <button className="" onClick={() => addNewBubble(fields, userId)}>Add</button>
               </div>
               :
               <Button primary onClick={() => setAdding(true)}>Create a new Bubble</Button>
            }

            <div className="bubble-lists"> Your Bubbles </div>
            <div>
               {list.map((item) => (
                  <Link to = {`/bubbles/${item.id}`}> 
                     <Card
                        key={item.id}
                        header={item.title}
                        meta='Test'
                        description='A group for friends'
                     >
                        <div className="card-headers">
                           <Header as='h3'>{item.title}</Header>
                           <Icon name='trash' ></Icon>
                        </div>
                     </Card>
                  </Link>
         
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
   updateUserStatus: UpdateUserStatus(dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)