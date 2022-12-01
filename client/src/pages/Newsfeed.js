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

<div class="px-4 py-5 mx-auto sm:max-w-2xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
            <div class="grid grid-cols-12 gap-6">

                {/* My Profile */}
                <div class="hidden lg:block col-span-3 space-y-5">
                    <div class="bg-white rounded-lg shadow p-6">
                        <div class="flex items-center justify-left">
                            {/* TODO Add user profile img refefence here in img source*/}
                            {/* TODO Add reference to user location or email in subtitle */}
                            <img
                                class="h-12 w-12 rounded-full"
                                src={profilePic}
                            />
                            <div class="ml-4">
                                <h3 class="text-base font-bold"><Link to={`/profile/${userData._id}`}> My Profile </Link></h3>
                                <h4 class="text-sm">Location: {userLocation}</h4>
                            </div>
                        </div>
                    </div>

                    {/* Create new post button/market sales/share */}
                    <div class="bg-white rounded-lg shadow p-6 space-y-5">
                        <div class="space-y-4">
                            <div class="flex items-center cursor-pointer">
                                <svg
                                    class="w-6 h-6 text-gray-900"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        d="M16 12L10 16.3301V7.66987L16 12Z"
                                        fill="currentColor"
                                    />
                                </svg>
                                {/* If user is logged in, create a new post is visible */}
                                <div class="ml-4 text-gray-900">{Auth.loggedIn() ? (
                <button onClick={newPostBtn}>Create a new post</button>
            ) : (
                null
            )}</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Toggle area for postform Section */}
                <div class="col-span-12 lg:col-span-6 space-y-5">
            <div id="post-form" className="invis">
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
                ) }
            </div>

            {/* People you may know */}
            {/* TODO: Map through users and provide two-four random entries */}

            <div class="hidden lg:block col-span-3 space-y-5">
                    <div class="bg-green-50 rounded-lg shadow p-6 space-y-5">
                        <h3 class="font-bold text-base text-gray-900">
                            People you may know
                        </h3>
                        <div class="space-y-3">
                            <div class="flex justify-between items-center">
                                <div class="flex items-center">
                                    <img
                                        class="rounded-full h-10 w-10"
                                        src="https://sfsg-upload.s3.us-east-2.amazonaws.com/nathan-dumlao-4_mJ1TbMK8A-unsplash.jpg"
                                    />
                                    <div class="ml-2 text-sm">
                                      Syd
                                    </div>
                                </div>
                                <Link to={`/profile/`}>
                                <button
                                    class="bg-green-200 text-black hover:text-white hover:bg-green-600 transition duration-100	transform hover:scale-110	 text-xs  rounded p-2 text-gray-900"
                                >
                                    View
                                </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    </div>
        </div>

        </div>
    }
        </>
    )
}