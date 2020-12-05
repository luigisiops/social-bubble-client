import React, {useEffect, useState} from 'react'
import { NavLink } from "react-router-dom"
import { connect } from "react-redux"
import './Bubbles.css'
import userEvent from '@testing-library/user-event'
import {GetBubblePosts} from "../use-cases/getBubblePosts"

export const  Bubbles = ({getPosts}) => {

    useEffect(() => {
        getPosts(10)

    }, [])

    return (
        <div className="bubbles-container">

          

            <h1>BUBBLES</h1>

        </div>
    )
}


const mapStateToProps = (state, { posts }) => ({
    posts: state.posts
})

const mapDispatchToProps = (dispatch) => ({
    getPosts: GetBubblePosts(dispatch)
})


export default connect(mapStateToProps, mapDispatchToProps)(Bubbles)