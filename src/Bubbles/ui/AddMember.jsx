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
   let width = window.innerWidth
   if (width > 768){
   return (
      <div class="box">
      <Navbar class="Nav"></Navbar>
      <div className="addMember-container">
          
          <div class="div1">
             <h1 class="bubble-title"> Add Member</h1>
         </div>
          <div class="div2"> 
             <label class="bubble-text">User's Email:</label>
          </div>
          <div class="div3">
            <Input type="text" placeholder="Email Address" value={fields.email} onChange={setField}/>
          </div> 
          <div>
            <Button onClick={() => addMember(fields, bubbleId)} primary color="blue">
            Add Member
            </Button>
         </div> 
      </div>
      </div>
   )} else {
      return (
         <div class="box">
         <div className="addMember-container">
             
             <div class="div1">
                <h1 class="bubble-title"> Add Member</h1>
            </div>
             <div class="div2"> 
                <label class="bubble-text">User's Email:</label>
             </div>
             <div class="div3">
               <Input type="text" placeholder="Email Address" value={fields.email} onChange={setField}/>
             </div> 
             <div>
               <Button onClick={() => addMember(fields, bubbleId)} primary color="blue">
               Add Member
               </Button>
            </div> 
         </div>
         <Navbar class="Nav"></Navbar>
         </div>
   
      )}
}

const mapDispatchToProps = (dispatch) => ({
   addMember: AddBubbleMember(dispatch)
})


export default connect(null, mapDispatchToProps)(AddMember)