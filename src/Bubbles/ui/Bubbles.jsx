import React, { useEffect, useState } from 'react'
import Moment from 'react-moment'
import { Link, useParams } from "react-router-dom"
import { connect } from "react-redux"
import { Comment, Icon, Button } from 'semantic-ui-react'
import './Bubbles.css'

import Nav from "../../login/ui/nav"

import { GetBubblePosts } from "../use-cases/getBubblePosts"
import { GetBubbleUsers } from "../use-cases/getBubbleUsers"



export const Bubbles = ({ getPosts, getBubbleUsers, posts }) => {
    const test = { name: 'John Smith', date: '9/10/2020', post: 'Some random test post about an activity' }
    const bubbleId = parseInt(useParams().bubbleId)
    useEffect(() => {
        getPosts(10)
        getBubbleUsers(10)

    }, [])
    //need to grab posts info and display it and create action for adding and deleting posts
    console.log(posts.posts)
    if(posts.posts === []){
        console.log('fefefe')
    }
    else {
        return (
            <div className="bubbles-container">
                <Nav/>
                <h1 className="bubble-title">Family</h1>
                <div className="toggle">
                <Button  primary color='blue'>Activities</Button>
                <Link to ={`/members/${bubbleId}`}><Button className="links" primary color='blue'>Members</Button></Link>
    
                </div>
                <div className="bubble-status">This bubble is at risk!</div>
                {posts.posts.map((post)=> (
                    <div className = "user-posts">

                    <Comment.Group>
                    <Comment>
                    <Comment.Avatar as='a' src='/images/avatar/small/stevie.jpg' />
                    <Comment.Content>
                        <Comment.Author>{post.Post.User.first_name + " " + post.Post.User.last_name}</Comment.Author>
                        <Comment.Metadata>
                        <div>
                            <Moment fromNow>{post.Post.createdAt}</Moment>
                            </div>
                        <div>
                            <Icon name='star' />5 Faves
                        </div>
                        </Comment.Metadata>
                        <Comment.Text>
                            {post.Post.body}
                        </Comment.Text>
                    </Comment.Content>
                    </Comment>
    
                </Comment.Group>
                </div>
                ))} 
                    
            </div>
        )
    }

    }



        



const mapStateToProps = (state, { posts }) => ({
    posts: state.bubblePosts,
    bubbleUsers: state.bubbleUsers

})

const mapDispatchToProps = (dispatch) => ({
    getPosts: GetBubblePosts(dispatch),
    getBubbleUsers: GetBubbleUsers(dispatch)
})


export default connect(mapStateToProps, mapDispatchToProps)(Bubbles)