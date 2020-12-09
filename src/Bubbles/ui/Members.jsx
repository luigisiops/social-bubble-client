import React, {  useEffect, useState } from 'react'
import { Link, useParams,} from "react-router-dom"
import {connect} from "react-redux"
import {GetBubbleUsers} from '../use-cases/getBubbleUsers'
import { Button, Card, Image, Icon} from 'semantic-ui-react'
import Navbar from '../../Navbar/Navbar'
import "./Members.css"




export const Members = ({getBubbleUsers, bubbleUsers, bubbles, user}) => {
  let status = user.user.user_status
  const bubbleId = parseInt(useParams().bubbleId)
  const [userStatus, setUserStatus] = useState(status)
  const [statusText, setStatusText] = useState('Healthy')
  console.log(bubbleUsers.byId)

      let statusComponent;
    if (status === 'green') {
        let statusText = "This bubble is safe!"
        statusComponent = <div className = "bubble-status-green">{statusText}</div>
        } 
    else if (status === 'yellow') {
        let statusText = "One or more members are at risk!"
        statusComponent = <div className = "bubble-status-yellow">{statusText}</div>

    } else if (status === 'red') {
        let statusText = "One or more members are sick!"
        statusComponent = <div className = "bubble-status-red">{statusText}</div>
        }

    useEffect(()=> {
        getBubbleUsers(bubbleId)
    },[])

    if (bubbleUsers.byId === []) {
        
    }
    else{
      let width = window.innerWidth
      if (width > 768){
        return (
          <div>
            <Navbar />
            <div className="bubbles-container">
                
                <h1 className="bubble-title">Family</h1>
                <div className="toggle">
                <Link to = {`/bubbles/${bubbleId}}`}><Button className="links button-width" primary >Feed</Button></Link>
                <Link to ={`/members/${bubbleId}}`}><Button className="links button-width" primary >Members</Button></Link>
    
                </div>
                <div className="bubble-status">{statusComponent}</div>      
                {bubbleUsers.byId.map((item) => (
                    
                    <div class="card"> <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src='stock-profile.png'
        />
        <Card.Header>{item.User.first_name + " " + item.User.last_name}</Card.Header>
        <Card.Meta>Member</Card.Meta>
      </Card.Content>
    </Card></div>
                ))}
        <Link to ={`/members/${bubbleId}}/add-member`}><Button className="links" positive>Add Member</Button></Link>
            </div>
            </div>
        )
    }else{
      return(
        <div>
        <div className="bubbles-container">
            
            <h1 className="bubble-title">Family</h1>
            <div className="toggle">
            <Link to = {`/bubbles/${bubbleId}}`}><Button className="links button-width" primary >Feed</Button> </Link>
                <Link to ={`/members/${bubbleId}}`}><Button className="links button-width" primary >Members</Button></Link>

            </div>
            <div className="bubble-status">This bubble is at risk!</div>      
            {bubbleUsers.byId.map((item) => (
                
                <div class="card"> <Card>
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
    </div>
  </Card.Content>
</Card></div>
            ))}
    <Link to ={`/members/${bubbleId}}/add-member`}><Button className="links" positive>Add Member</Button></Link>
        </div>
        <Navbar />
        </div>
      )
    }
    
  }
  }
    


const mapStateToProps = (state, {users}) => ({
    bubbleUsers: state.bubbleUsers,
    bubbles: state.bubble,
    user: state.user
})

const mapDispatchToProps = (dispatch) => ({
    getBubbleUsers: GetBubbleUsers(dispatch),
    //addBubbleUsers: AddBubbleUsers(dispatch)
})


export default connect(mapStateToProps, mapDispatchToProps)(Members)

