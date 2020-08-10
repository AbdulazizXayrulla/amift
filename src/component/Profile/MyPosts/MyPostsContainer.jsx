import React from 'react';
import {addMessageActionCreator, editTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";


const MyPostsContainer = () => {

    return (
        <StoreContext.Consumer>{
            (store)=>{
                let newPost = () => {
                    store.dispatch(addMessageActionCreator())
                }
                const onChangeClick = (props1) => {

                    store.dispatch(editTextActionCreator(props1)
                    );


                }
                {debugger}
          return <MyPosts newPost={newPost} onChangeClick={onChangeClick} newPostText={store.getState().profilePage.newPostText}
                           posts={store.getState().profilePage.posts}/>

            }

        }

        </StoreContext.Consumer>
    )
}

export default MyPostsContainer;