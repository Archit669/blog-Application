import { Helmet } from "react-helmet";
import config from "../conf/conf";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import parse from "html-react-parser";
import { useSelector } from "react-redux";


function PostDetail() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);

    const isAuthor = post && userData ? post.userId === userData.$id : false;

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) setPost(post);
                else navigate("/");
            });
        } else navigate("/");
    }, [slug, navigate]);

    const deletePost = () => {
        appwriteService.deletePost(post.$id).then((status) => {
            if (status) {
                appwriteService.deleteFile(post.featuredImage);
                navigate("/all-posts");
            }
        });
    };
    return post ? (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Post title - Wanderlust Chronicles</title>
                <link rel="canonical" href={`${config.clientUrl}`} />
            </Helmet>

            <section className="w-full h-full min-h-screen py-8">
                <div className="absolute w-full h-[80vh] inset-0  bg-black">
                    <img
                        className="opacity-90"
                        src={appwriteService.getFilePreview(post.featuredImage)}
                        alt={post.title}
                    />
                    <div className="absolute w-full h-full inset-0 bg-gradient-to-tl from-black to-black via-transparent"></div>
                </div>

                <div className="w-full mt-28 container text-white m-auto">
                    <div className="space-y-4">
                        <p className="font-thin uppercase text-sm tracking-[0.5rem]">
                            Home • Posts • Current post...
                        </p>
                        <h1 className="text-5xl font-bold leading-[3.5rem] max-w-[700px]">
                            {post.title}
                        </h1>
                        <div className="flex items-end justify-between gap-6 pt-8">
                            <div className="flex items-center gap-6">
                                {/* <div className="w-[60px] h-[60px] bg-white rounded-full"></div>
                                <div className="text-lg">
                                    <p>
                                        by{" "}
                                        <span className="font-semibold hover:underline cursor-pointer">
                                            Sujoy kumar haldar
                                        </span>
                                    </p>
                                    <p>{new Date().toDateString()}</p>
                                </div> */}
                            </div>

                            {isAuthor && (
                            <div className="flex items-center gap-4">
                                <Link to={`/edit-post/${post.$id}`}>
                                    <p className="bg-green-700 text-white rounded-full px-6 py-2">
                                        Update Post
                                    </p>
                                </Link>

                                <p 
                                className="bg-red-600 text-white rounded-full px-6 py-2"
                                onClick={deletePost}   
                                >
                                    Delete Post
                                </p>
                            </div>

                            )}
                            
                        </div>
                    </div>

                    <div className="bg-white text-black mt-16 p-16 space-y-8 border border-gray-200">
                         {parse(post.content)}
                    </div>
                </div>
            </section>
        </>
    ): null;
}

export default PostDetail;
