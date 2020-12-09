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



export const Bubbles = ({ getPosts, getBubbleUsers, deleteBubble, addBubblePost, posts, user, bubble }) => {
    const [fields, setFields] = useState({})
    const [title, setTitle] = useState({})

    const setField = (evt) => {
        setFields({
            ...fields,
            [evt.target.name]: evt.target.value
        })
    }

    const test = { name: 'John Smith', date: '9/10/2020', post: 'Some random test post about an activity' }
    const bubbleId = parseInt(useParams().bubbleId)
    const userId = user.user.id
    console.log(userId)
    console.log(bubbleId)
    useEffect(() => {
        getPosts(bubbleId)
        getBubbleUsers(bubbleId)
        setTitle(bubble)

    }, [])

    //need to grab posts info and display it and create action for adding and deleting posts
//    console.log(posts.posts)
    if (posts.posts === []) {
    }
    else {
        let width = window.innerWidth
        if (width > 768) {
            return (
                <div>
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

<<<<<<< HEAD
                        <div className = "post-input-label">hello</div>
                        <input
=======
                        <Input 
>>>>>>> c0934c99fe5990f2557595549bd7e878f9067eac
                            name="body"
                            type="text"
                            placeholder = "Create Post"
                            onChange={setField}>
<<<<<<< HEAD
                        </input>
                        <button onClick ={() => {addBubblePost(userId, fields)}}>Add Post</button>
=======
                        </Input>
                        <Button id="addbutton" primary onClick ={() => {addBubblePost(user.user.id, fields)}}>Add Post</Button>
>>>>>>> c0934c99fe5990f2557595549bd7e878f9067eac

                        {posts.posts.map((post) => (
                            <div className="user-posts">

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
                        <div className='delete-button'>
                            <Button negative onClick={() => { deleteBubble(bubbleId) }}>Delete Bubble?</Button>
                        </div>

                    </div>
                </div>
            )
        } else {
            return (
                <div>
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
    bubble: state.bubble.bubbleList,
})

const mapDispatchToProps = (dispatch) => ({
    getPosts: GetBubblePosts(dispatch),
    getBubbleUsers: GetBubbleUsers(dispatch),
    deleteBubble: DeleteBubble(dispatch),
    addBubblePost: AddBubblePost(dispatch),
})


export default connect(mapStateToProps, mapDispatchToProps)(Bubbles)