import React, {useEffect, useState} from 'react'
import { NavLink } from "react-router-dom"
import { connect } from "react-redux"
import './Bubbles.css'
import {GetBubblePosts} from "../use-cases/getBubblePosts"
import {GetBubbleUsers} from "../use-cases/getBubbleUsers"


export const  Bubbles = ({getPosts, getBubbleUsers, posts}) => {
    const test = {name: 'John Smith', date: '9/10/2020', post: 'Some random test post about an activity'}
    useEffect(() => {
        getPosts(10)
        getBubbleUsers(10)

    }, [])

    return (
        <div className="bubbles-container">
            <h1 className = "bubble-title">Family</h1>
            <div className = "toggle">
                <div className = "links">Activities</div>
                <div className = "links">Members</div>
            </div>
            <div className = "bubble-status">This bubble is at risk!</div>
            <div className = "user-post">
                <img src = "stock-profile.png" className = "profile-pic"></img>
                <div className = "comment-info">
                    <div className = "name-date">
                        <div className = "username">John Smith</div>
                        <div className = "date">9/29/2020</div>
                    </div>
                    <div className = "post-content">This is a comment to test if an activity is safe</div>
                </div>
            </div>

            <div className = "user-post">
                <img src = "stock-profile.png" className = "profile-pic"></img>
                <div className = "comment-info">
                    <div className = "name-date">
                        <div className = "username">John Smith</div>
                        <div className = "date">9/29/2020</div>
                    </div>
                    <div className = "post-content">This is a comment to test if an activity is safe</div>
                </div>
            </div>

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