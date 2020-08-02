import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.state.posts}  addMessage={props.addMessage}
            newPostText={props.state.newPostText} editText={props.editText}
            />

        </div>
    )
}

export default Profile;