import React, {useState, useEffect} from 'react'
import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'
import parse from "html-react-parser";

function PostCard({$id, title, featuredImage}) {

  const slug = `${$id}`;
  const [post, setPost] = useState(null);
  const [fallback, setFallback] = useState("");

  useEffect(() => {
    if (slug) {
        appwriteService.getPost(slug).then((post) => {
            if (post){ 
              setPost(post);
              setFallback(post.content.substr(0,90) + "...");
            }
        });
    }
}, [slug]);



  return (
    <div className="w-full p-2 bg-white shadow-md hover:scale-105 transition-all z-0 hover:z-10 ">
        <div className="w-full h-[150px] bg-black">
            <img
                src={appwriteService.getFilePreview(featuredImage)}
                className="w-full h-full object-cover"
                alt={title}
            />
        </div>
        <div className="p-4 space-y-3 border-t border-black">
            <h2 className="text-xl font-bold">{title}</h2>
            <p className="text-base text-gray-500">
                {parse(fallback)}
            </p>
            <Link className="text-base" to={`/post/${$id}`}>
                Read more
            </Link>
        </div>
    </div>
);
}


export default PostCard
