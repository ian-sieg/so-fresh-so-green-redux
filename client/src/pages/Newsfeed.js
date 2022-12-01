import React from "react";
import {useQuery} from '@apollo/client'
import {QUERY_ALL_POSTS, QUERY_USER_MINI} from '../utils/queries'
import PostList from '../components/PostList'
import PostForm from "../components/PostForm";
import { Link } from "react-router-dom";
import Auth from '../utils/auth'
import '../index.css'


export default function Newsfeed() {
    const {loading: loadingPosts, data: postData} = useQuery(QUERY_ALL_POSTS)
    const newPostBtn = () => {
        const postForm = document.getElementById('post-form')
        postForm.classList.toggle('invis')
    }

    const profData = Auth.getProfile()
    const userData = profData.data

    const {loading: loadingUser, data: curUserData} = useQuery(QUERY_USER_MINI, {
        variables: {_id: userData._id}
    })
    const profilePic = curUserData?.getUser.profPic
    const userLocation = curUserData?.getUser.location
    return (
        <>
        {loadingUser || loadingPosts ? null : 

        <div>
            <div>

                {/* My Profile */}
                <div>
                    <div>
                        <div>
                            {/* TODO Add user profile img refefence here in img source*/}
                            {/* TODO Add reference to user location or email in subtitle */}
                            <img
                                src={profilePic}
                            />
                            <div class="ml-4">
                                <h3><Link to={`/profile/${userData._id}`}> My Profile </Link></h3>
                                <h4>Location: {userLocation}</h4>
                            </div>
                        </div>
                    </div>

                    {/* Create new post button/market sales/share */}
                                {/* If user is logged in, create a new post is visible */}
                                <div>{Auth.loggedIn() ? (
                <button onClick={newPostBtn}>Create a new post</button>
            ) : (
                null
            )}</div>
                </div>

                {/* Toggle area for postform Section */}
                <div>
                    <div id="post-form">
                        <PostForm />
                    </div>
                    {/* Newsfeed */}
                    {loadingPosts ? (
                        <h2>Loading posts...</h2>
                    ) : (
                        postData?.posts.map(post => 
                        <div key={post.id}>
                            <PostList post={post}/>
                        </div>)
                    )}
            </div>

            {/* People you may know */}
            {/* TODO: Map through users and provide two-four random entries */}

            {/* <div>
                <div>
                    <h3>
                        People you may know
                    </h3>
                    <div>
                        <div>
                            <div>
                                <img
                                    src="https://sfsg-upload.s3.us-east-2.amazonaws.com/nathan-dumlao-4_mJ1TbMK8A-unsplash.jpg"
                                />
                                <div>
                                    Syd
                                </div>
                            </div>
                            <Link to={`/profile/`}>
                            <button>
                                View
                            </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
        </div>
    }
        </>
    )
}