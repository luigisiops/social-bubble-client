import React, {  useEffect, useState } from 'react'
import { Link, useParams,} from "react-router-dom"
import {connect} from "react-redux"
import {GetBubbleUsers} from '../use-cases/getBubbleUsers'
import { Button, Card, Image } from 'semantic-ui-react'
import Nav from "../../Login/ui/nav"
import Navbar from '../../Navbar/Navbar'




export const Members = ({getBubbleUsers, bubbleUsers}) => {
  const bubbleId = parseInt(useParams().bubbleId)
  console.log(bubbleUsers.byId)

    useEffect(()=> {
        getBubbleUsers(bubbleId)
    },[])

    if (bubbleUsers.byId === []) {
        
    }
    else{
        return (
            <div className="bubbles-container">
                <Navbar />
                <h1 className="bubble-title">Family</h1>
                <div className="toggle">
                <Link to = {`/bubbles/${bubbleId}}`}><Button className="links" primary >Activities</Button> </Link>
                <Link to ={`/members/${bubbleId}}`}><Button className="links" primary >Members</Button></Link>
    
                </div>
                <div className="bubble-status">This bubble is at risk!</div>      
                {bubbleUsers.byId.map((item) => (
                    
                    <div> <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src='stock-profile.png'
        />
        <Card.Header>{item.first_name}</Card.Header>
        <Card.Meta>Member</Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Approve
          </Button>
          <Button basic color='red'>
            Decline
          </Button>
        </div>
      </Card.Content>
    </Card></div>
                ))}
        <Link to ={`/members/${bubbleId}}/add-member`}><Button className="links" positive>Add Member</Button></Link>
            </div>
        )
    }
    }
    


const mapStateToProps = (state, {users}) => ({
    bubbleUsers: state.bubbleUsers
})

const mapDispatchToProps = (dispatch) => ({
    getBubbleUsers: GetBubbleUsers(dispatch),
    //addBubbleUsers: AddBubbleUsers(dispatch)
})


export default connect(mapStateToProps, mapDispatchToProps)(Members)

