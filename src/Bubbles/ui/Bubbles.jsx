import React, { useEffect, useState } from 'react'
import Moment from 'react-moment'
import { Link, useParams } from "react-router-dom"
import { connect } from "react-redux"
import { Comment, Icon, Button, Input} from 'semantic-ui-react'
import './Bubbles.css'

import Nav from "../../Login/ui/nav"
import Navbar from "../../Navbar/Navbar"

import { GetBubblePosts } from "../use-cases/getBubblePosts"
import { GetBubbleUsers } from "../use-cases/getBubbleUsers"
import { DeleteBubble } from "../use-cases/deleteBubble"
import { user } from '../../Login/framework/reducer'
import { AddBubblePost } from '../use-cases/addBubblePost'



export const Bubbles = ({ getPosts, getBubbleUsers, deleteBubble, addbubblePost, posts, user, bubble }) => {
    const [fields, setFields] = useState({})

    const setField = (evt) => {
        setFields({
            ...fields,
            [evt.target.name]: evt.target.value
        })
    }

    const test = { name: 'John Smith', date: '9/10/2020', post: 'Some random test post about an activity' }
    const bubbleId = parseInt(useParams().bubbleId)

    console.log(bubbleId)
    useEffect(() => {
        getPosts(bubbleId)
        getBubbleUsers(user.id)

    }, [])
    //need to grab posts info and display it and create action for adding and deleting posts
    console.log(posts.posts)
    if (posts.posts === []) {
        console.log('fefefe')
    }
    else {
        let width = window.innerWidth
        if (width > 768) {
            return (
                <div class="box">
                    <Navbar />
                    <div className="bubbles-container">
                        {bubble.map(item => {
                            if (bubbleId === item.id) {
                                return (
                                    <h1 className="bubble-title">{item.title}</h1>)
                            }
                        })}


                        <div className="toggle">
                            <Link to = {`/bubbles/${bubbleId}}`}><Button className="links button-width" primary >Feed</Button></Link>
                            <Link to={`/members/${bubbleId}`}><Button className="links button-width" primary color='blue'>Members</Button></Link>

                        </div>
                        <div className="bubble-status">This bubble is at risk!</div>

                        <Input 
                            name="body"
                            type="text"
                            placeholder = "Create Post"
                            onChange={setField}>
                        </Input>
                        <Button id="addbutton" primary onClick ={() => {addbubblePost(user.id, fields)}}>Add Post</Button>

                        {posts.posts.map((post) => (
                            <div className="user-posts">

                                <Comment.Group>
                                    <Comment>
                                        <Comment.Content>
                                            <Comment.Author>{post.Post.User.first_name + " " + post.Post.User.last_name}</Comment.Author>
                                            <Comment.Metadata>
                                                <div>
                                                    <Moment fromNow>{post.Post.createdAt}</Moment>
                                                </div>
                                                <div>
                                                    
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
                        <div className='delete-button'>
                            <Button negative onClick={() => { deleteBubble(bubbleId) }}>Delete Bubble?</Button>
                        </div>

                    </div>
                </div>
            )
        } else {
            return (
                <div class="box">
                    <div className="bubbles-container">
                        {bubble.map(item => {
                            if (bubbleId === item.id) {
                                return (
                                    <h1 className="bubble-title">{item.title}</h1>)
                            }
                        })}


                        <div className="toggle">
                            <Link to = {`/bubbles/${bubbleId}}`}><Button className="links button-width" primary >Feed</Button></Link>
                            <Link to={`/members/${bubbleId}`}><Button className="links button-width" primary color='blue'>Members</Button></Link>

                        </div>
                        <div className="bubble-status">This bubble is at risk!</div>
                        {posts.posts.map((post) => (
                            <div className="user-posts">

                                <Comment.Group>
                                    <Comment>
                                        <Comment.Content>
                                            <Comment.Author>{post.Post.User.first_name + " " + post.Post.User.last_name}</Comment.Author>
                                            <Comment.Metadata>
                                                <div>
                                                    <Moment fromNow>{post.Post.createdAt}</Moment>
                                                </div>
                                                <div>
                                                    
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
                        <div className='delete-button'>
                            <Button negative onClick={() => { deleteBubble(bubbleId) }}>Delete Bubble?</Button>
                        </div>

                    </div>
                    <Navbar />
                </div>
            )
        }
    }

}







const mapStateToProps = (state, { posts }) => ({
    posts: state.bubblePosts,
    bubbleUsers: state.bubbleUsers,
    user: state.user.user,
    bubble: state.bubble.bubbleList,
})

const mapDispatchToProps = (dispatch) => ({
    getPosts: GetBubblePosts(dispatch),
    getBubbleUsers: GetBubbleUsers(dispatch),
    deleteBubble: DeleteBubble(dispatch),
    addbubblePost: AddBubblePost(dispatch),
})


export default connect(mapStateToProps, mapDispatchToProps)(Bubbles)