import React from 'react';
import {addMessageActionCreator, editTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

import {connect} from "react-redux";




let mapStateToProps=(state)=>{
    return{

        newPostText:state.profilePage.newPostText,
        posts:state.profilePage.posts
    }
}
let mapDispatchToProps=(dispatch)=>{
    return{
        newPost:()=>{dispatch(addMessageActionCreator())},
        onChangeClick:(props1)=>{dispatch(editTextActionCreator(props1))}
    }
}

const MyPostsContainer=connect(mapStateToProps,mapDispatchToProps)(MyPosts)

export default MyPostsContainer;