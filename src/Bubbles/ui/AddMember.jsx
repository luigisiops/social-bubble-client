import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import {connect} from "react-redux"
import {GetBubbleUsers} from '../use-cases/getBubbleUsers'
import {AddBubbleMember} from "../use-cases/addBubbleMember"
import { Button, Card, Image, Input } from 'semantic-ui-react'
import Nav from "../../login/ui/nav"

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
      <div className="addMember-container">
          <h1> Add Member</h1>
          <div className="ui input"> 
          <label>User's Email:</label>
          <input type="text" placeholder="Email Address" value={fields.email} onChange={setField}/> 
          <Button onClick={() => addMember(fields, bubbleId)} basic color='green'>
            Add Member
          </Button>
          </div> 
      </div>
   )
}

const mapDispatchToProps = (dispatch) => ({
   addMember: AddBubbleMember(dispatch)
})


export default connect(null, mapDispatchToProps)(AddMember)