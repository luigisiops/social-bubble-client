import React, { useEffect, useState } from 'react'
import { Link, useParams, } from "react-router-dom"
import { connect } from "react-redux"
import { GetBubbleUsers } from '../use-cases/getBubbleUsers'
import { Button, Card, Image } from 'semantic-ui-react'
import Navbar from '../../Navbar/Navbar'
import "./Members.css"




export const Members = ({ getBubbleUsers, bubbleUsers, bubble, user }) => {
  const bubbleId = parseInt(useParams().bubbleId)
  const userId = user.user.id
  let bubbleStatus = bubble.byId[bubbleId].bubble_status

  console.log(bubbleUsers.byId)

  const [status, setStatus] = useState(bubbleStatus)
  const [statusText, setStatusText] = useState('')

  let statusComponent;
  if (status === 'green') {
    let statusText = "This bubble is safe!"
    statusComponent = <div className="bubble-status-green">{statusText}</div>
  }
  else if (status === 'yellow') {
    let statusText = "One or more members are at risk!"
    statusComponent = <div className="bubble-status-yellow">{statusText}</div>

  } else if (status === 'red') {
    let statusText = "One or more members are sick!"
    statusComponent = <div className="bubble-status-red">{statusText}</div>
  }

  const handleBubbleStatus = () => {
    if (bubbleStatus === "green") {
      setStatus('This bubble is safe')
    }
    else if (bubbleStatus === "yellow") {
      setStatus('One or more members is at risk')
    }
    else if (bubbleStatus === "red") {
      setStatus('One or more members is sick')
    }
  }

  useEffect(() => {
    getBubbleUsers(bubbleId)
  }, [])

  if (bubbleUsers.byId === []) {

  }
  else {
    let width = window.innerWidth
    if (width > 768) {
      return (
        <div class="box">
          <Navbar />
          <div className="bubbles-container">
            {bubble.bubbleList.map(item => {
              if (bubbleId === item.id) {
                return (
                  <h1 className="bubble-title">{item.title}</h1>)
              }
            })}

            <div className="toggle">
              <Link to={`/bubbles/${bubbleId}}`}><Button className="links button-width" primary >Feed</Button></Link>
              <Link to={`/members/${bubbleId}}`}><Button className="links button-width" primary >Members</Button></Link>

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
            <Link to={`/members/${bubbleId}}/add-member`}><Button className="links" positive>Add Member</Button></Link>
          </div>
        </div>
      )
    } else {
      return (
        <div class="box">
          <div className="bubbles-container">

          {bubble.bubbleList.map(item => {
              if (bubbleId === item.id) {
                return (
                  <h1 className="bubble-title">{item.title}</h1>)
              }
            })}
              <div className="toggle">
              <Link to={`/bubbles/${bubbleId}}`}><Button className="links button-width" primary >Feed</Button> </Link>
              <Link to={`/members/${bubbleId}}`}><Button className="links button-width" primary >Members</Button></Link>

            </div>
            <div className="bubble-status">{statusComponent}</div>
            {bubbleUsers.byId.map((item) => (

              <div class="card"> <Card>
                <Card.Content>
                  <Card.Header>{item.first_name}</Card.Header>
                  <Card.Meta>Member</Card.Meta>
                </Card.Content>
              </Card></div>
            ))}
            <Link to={`/members/${bubbleId}}/add-member`}><Button className="links" positive>Add Member</Button></Link>
          </div>
          <Navbar />
        </div>
      )
    }

  }
}



const mapStateToProps = (state, { users }) => ({
  user: state.user,
  bubbleUsers: state.bubbleUsers,
  bubble: state.bubble,

})

const mapDispatchToProps = (dispatch) => ({
  getBubbleUsers: GetBubbleUsers(dispatch),
  //addBubbleUsers: AddBubbleUsers(dispatch)
})


export default connect(mapStateToProps, mapDispatchToProps)(Members)

