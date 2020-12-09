import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import {connect} from "react-redux"
import {GetBubbleUsers} from '../use-cases/getBubbleUsers'
import {AddBubbleMember} from "../use-cases/addBubbleMember"
import { Button, Card, Image, Input } from 'semantic-ui-react'
import Navbar from "../../Navbar/Navbar"
import "./AddMember.css"

export const AddMember = ({addMember}) => {

   const bubbleId = 2

   const [fields, setFields] = useState({})
   const setField = (evt) =>
   setFields({
      ...fields,
      [evt.target.name]: evt.target.value
   })
console.log(fields)

   return (
      <div>
      <Navbar class="Nav"></Navbar>
      <div className="addMember-container">
          
          <div>
             <h1> Add Member</h1>
         </div>
          <div> 
             <label>User's Email:</label>
          </div>
          <div>
            <input type="text" placeholder="Email Address" value={fields.email} onChange={setField}/>
          </div> 
          <div>
            <Button onClick={() => addMember(fields, bubbleId)} basic color='green'>
            Add Member
            </Button>
         </div> 
      </div>
      </div>
   )
}

const mapDispatchToProps = (dispatch) => ({
   addMember: AddBubbleMember(dispatch)
})


export default connect(null, mapDispatchToProps)(AddMember)