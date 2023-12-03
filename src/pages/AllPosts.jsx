import React, { useState, useEffect } from "react";
import { Container, PostCard } from "../components";
import appwriteService from "../appwrite/config";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function AllPosts() {
  const [posts, setPosts] = useState([]);
  const authStatus = useSelector((state) => state.auth.status);

  appwriteService.getPosts([]).then((posts) => {
    if (posts) {
      setPosts(posts.documents);
    }
  });

  return (
    <div className="w-full py-8 ">
      <section className="w-full h-full min-h-screen py-8">
        <div className="fixed w-full h-screen inset-0  bg-black">
          <img
            className="opacity-90"
            src="AllPosts.png"
            alt="home page background"
          />
        </div>

        <div className="fixed w-full h-screen inset-0 bg-gradient-to-tl from-white to-black via-transparent"></div>

        <div className="space-y-8 w-[70%] mt-28 container text-white m-auto">
          <div className="space-y-4">
            <p className="font-thin uppercase text-sm tracking-[0.5rem]">
              Explore • Share • Connect
            </p>
            <h1 className="text-5xl font-bold leading-[3.5rem]">
              Read others story
            </h1>
          </div>
          <Link
            className="inline-block px-5 pt-2 pb-3 cursor-pointer rounded-md text-black font-semibold bg-white border border-white"
            to={authStatus ? "/add-post" : "/login"}
          >
            Write your story
          </Link>
        </div>

        <div className="py-16 container mx-auto w-[70%]">
          <div className="grid grid-cols-4 gap-import {useSelector} from 'react-redux'4">
            {posts.length > 0 ? (
              posts.map((post) => (
                <div key={post?.$id} className="m-4">
                  <PostCard {...post} />
                </div>
              ))
            ) : (
              <div className ="flex-col gap-4 w-full flex items-center justify-center">
                <div className ="w-10 h-10 border-2 text-black-400 text-2xl animate-spin border-gray-300 flex items-center justify-center border-t-blue-400 rounded-full">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    height="1em"
                    width="1em"
                    class="animate-ping"
                  >
                    <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"></path>
                  </svg>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default AllPosts;
