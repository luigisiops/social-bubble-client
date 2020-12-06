import React, { useEffect, useState } from 'react'
import { NavLink } from "react-router-dom"
import { connect } from "react-redux"
import { Feed, Icon, Divider, Button } from 'semantic-ui-react'
import './Bubbles.css'

import Nav from "../../login/ui/nav"

import { GetBubblePosts } from "../use-cases/getBubblePosts"
import { GetBubbleUsers } from "../use-cases/getBubbleUsers"



export const Bubbles = ({ getPosts, getBubbleUsers, posts }) => {
    const test = { name: 'John Smith', date: '9/10/2020', post: 'Some random test post about an activity' }
    useEffect(() => {
        getPosts(10)
        getBubbleUsers(10)

    }, [])

    return (
        <div className="bubbles-container">
            <Nav/>
            <h1 className="bubble-title">Family</h1>
            <div className="toggle">
            <Button className="links" basic color='blue'>Activities</Button>
            <Button className="links" basic color='blue'>Members</Button>

            </div>
            <div className="bubble-status">This bubble is at risk!</div>

            <Feed>

            <Divider />

                <Feed.Event>
                    <Feed.Label>
                        <img src='stock-profile.png' />
                    </Feed.Label>
                    <Feed.Content>
                        <Feed.Summary>
                            <Feed.User>Elliot Fu</Feed.User> added you as a friend
          <Feed.Date>1 Hour Ago</Feed.Date>
                        </Feed.Summary>
                        <Feed.Meta>
                        </Feed.Meta>
                    </Feed.Content>
                </Feed.Event>

                <Divider />

                <Feed.Event>
                    <Feed.Label>
                        <img src='stock-profile.png' />
                    </Feed.Label>
                    <Feed.Content>
                        <Feed.Summary>
                            <Feed.User>Elliot Fu</Feed.User> added you as a friend
          <Feed.Date>1 Hour Ago</Feed.Date>
                        </Feed.Summary>
                        <Feed.Meta>
                        </Feed.Meta>
                    </Feed.Content>
                </Feed.Event>

                <Divider />


            </Feed>


        </div>
    )
}


const mapStateToProps = (state, { posts }) => ({
    posts: state.posts,
    bubbleUsers: state.bubbleUsers

})

const mapDispatchToProps = (dispatch) => ({
    getPosts: GetBubblePosts(dispatch),
    getBubbleUsers: GetBubbleUsers(dispatch)
})


export default connect(mapStateToProps, mapDispatchToProps)(Bubbles)