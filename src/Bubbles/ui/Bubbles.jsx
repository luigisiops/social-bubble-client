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
import { AddBubblePost } from '../use-cases/addBubblePost'
import { DeleteBubblePost} from "../use-cases/deleteBubblePost"



export const Bubbles = ({ getPosts, getBubbleUsers, deleteBubble, addBubblePost, deleteBubblePost, posts, user, bubble }) => {
    const bubbleId = parseInt(useParams().bubbleId)
    const userId = user.user.id
    let bubbleStatus = bubble.byId[bubbleId].bubble_status

    const [fields, setFields] = useState({})
    const setField = (evt) => {
        setFields({
            ...fields,
            [evt.target.name]: evt.target.value
        })
    }

    const [status, setStatus] = useState(bubbleStatus)
    const [statusText, setStatusText] = useState('')
    
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

    useEffect(() => {
        getPosts(bubbleId)
        getBubbleUsers(bubbleId)
    }, [])
    //creating options for displaying bubble risk:

    const handleBubbleStatus = () => {
        if (bubbleStatus === "green") {
            setStatus('This bubble is safe')
        }
        else if (bubbleStatus === "yellow"){
            setStatus('One or more members is at risk')
        }
        else if (bubbleStatus === "red"){
            setStatus('One or more members is sick')
        }
    }

    //need to grab posts info and display it and create action for adding and deleting posts
//    console.log(posts.posts)
    if (posts.posts === []) {
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
                            <Link to = {`/bubbles/${bubbleId}}`}><Button className="links button-width" primary >Feed</Button></Link>
                            <Link to={`/members/${bubbleId}`}><Button className="links button-width" primary color='blue'>Members</Button></Link>

                        </div>

                            <div className="bubble-status"> {statusComponent} </div>                          

                        <Input 
                            name="body"
                            type="text"
                            placeholder = "Create Post"
                            onChange={setField}>
                        </Input>
                        <Button id="addbutton" primary onClick ={() => addBubblePost(userId, fields, bubbleId)}>Add Post</Button>

                        {posts.posts.map((post) => (
                            <div className="user-posts">
                                <Comment.Group>
                                    <Comment>
                                        <Comment.Avatar as='a' src='stock-profile.png' />
                                        <Comment.Content>
                                            <Comment.Author>{post.Post.User.first_name + " " + post.Post.User.last_name}</Comment.Author>
                                            <Comment.Metadata>
                                                <div>
                                                    <Moment fromNow>{post.Post.createdAt}</Moment>
                                                </div>
                                                <div>
                                                <Icon onClick = {() => deleteBubblePost(post.PostId)} name='trash'></Icon>
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
                            <Button negative onClick={() =>  deleteBubble(bubbleId) }>Delete Bubble?</Button>
                        </div>

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
                            <Link to = {`/bubbles/${bubbleId}}`}><Button className="links button-width" primary >Feed</Button></Link>
                            <Link to={`/members/${bubbleId}`}><Button className="links button-width" primary color='blue'>Members</Button></Link>

                        </div>
                        <div className="bubble-status"> {statusComponent} </div>                          

                        <Input 
                            name="body"
                            type="text"
                            placeholder = "Create Post"
                            onChange={setField}>
                        </Input>
                        <Button id="addbutton" primary onClick ={() => addBubblePost(userId, fields, bubbleId)}>Add Post</Button>

                        {posts.posts.map((post) => (
                            <div className="user-posts">

                                <Comment.Group>
                                    <Comment>
                                        <Comment.Avatar as='a' src='stock-profile.png' />
                                        <Comment.Content>
                                            <Comment.Author>{post.Post.User.first_name + " " + post.Post.User.last_name}</Comment.Author>
                                            <Comment.Metadata>
                                                <div>
                                                    <Moment fromNow>{post.Post.createdAt}</Moment>
                                                </div>
                                                <div>
                                                <Icon onClick = {() => deleteBubblePost(post.PostId)} name='trash'></Icon>
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
    user: state.user,
    bubble: state.bubble,
})

const mapDispatchToProps = (dispatch) => ({
    getPosts: GetBubblePosts(dispatch),
    getBubbleUsers: GetBubbleUsers(dispatch),
    deleteBubble: DeleteBubble(dispatch),
    addBubblePost: AddBubblePost(dispatch),
    deleteBubblePost: DeleteBubblePost(dispatch),
})


export default connect(mapStateToProps, mapDispatchToProps)(Bubbles)