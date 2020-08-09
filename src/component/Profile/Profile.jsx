import React from 'react';
import s from './Profile.module.css';

import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer posts={props.state.posts}
                     dispatch={props.dispatch}

            newPostText={props.state.newPostText}
            />

        </div>
    )
}

export default Profile;