import {createSelector} from 'reselect';
import { bubbleUsers } from './reducer';




export const getBubbleUsersFullName = (state) => state.bubbleUsers.map(bubbleUsers.first_name + " " + bubbleUsers.last_name)
export const getBubbleUsers = (state) => state.bubbleUsers
export const getPosts = (state) => state.posts
