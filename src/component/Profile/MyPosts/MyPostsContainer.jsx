import React from 'react';
import s from './MyPosts.module.css';

import {addMessageActionCreator, editTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
    let newPost = () => {
        props.dispatch(addMessageActionCreator())
    }
    const onChangeClick = (props1) => {

        props.dispatch(editTextActionCreator(props1)
        );


    }
    return (
        <MyPosts newPost={newPost} onChangeClick={onChangeClick} newPostText={props.newPostText} posts={props.posts}/>
    )
}

export default MyPostsContainer;