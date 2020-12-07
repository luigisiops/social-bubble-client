import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import "./dashboard.css"
import { GetUserBubbles } from "../use-cases/getUserBubbles"
import { GetBubbleUsers } from "../use-cases/getBubbleUsers"
import { AddNewBubble } from "../use-cases/addNewBubble"
import Nav from "../../login/ui/nav"

import { Image, Dropdown, Input, Button, Card, Header, Icon } from 'semantic-ui-react'


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

   const redirect = (element) => {

   }
   useEffect(() => {
      getBubbles(8)
   }, [])


   if (bubbles.bubbleList === []) {
   }

   else {
      const list = bubbles.bubbleList
      const userId = 10
      /*const content = list.map((item) => {
         <div>{item.title}</div>
      })*/

      const dropdownOptions = [
         {
            text: "I am healthy",
            value: 'I am healthy'
         }, { text: "I am Sick", value: "I am Sick" }]

      return (
         <div className="dashboard-container">
            <Nav />
            <div className="dashboard-username">John Smith</div>
            <Image src="stock-profile.png" className="profile-image" />
            <div className="dashboard-status"> You are at risk </div>
            <Dropdown
               placeholder='Select Status'
               fluid
               selection
               options={dropdownOptions}
            />
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
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)