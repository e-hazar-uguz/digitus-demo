import React, { useState, useEffect } from 'react';
import postData from '../datas/post-data.json'
import { PiShareFatThin,PiBookmarkSimpleThin,PiHeartStraightThin  } from "react-icons/pi";
import { BsBookmarkCheckFill } from "react-icons/bs";
import FavoriteIcon from '@mui/icons-material/Favorite';
import NewPost from './new-post';
const Posts = () => {
    
    const [postList, setPostList] = useState([]);  

    useEffect(() => {
        setPostList(postData);
      }, []);

return (

<div >
  <NewPost></NewPost>
  {postList.map((post, index) => (
    <div key={index} className="max-w-xl rounded-2xl overflow-hidden shadow-lg mt-16 bg-white mb-10">
<div className="flex items-center space-x-1">
    <img
        className="h-12 w-12 rounded-full mx-2"
        src={post.user_image}
        alt=""
    />
    <div>
        <div className="font-semibold text-lg mt-1">{post.user_name}</div>
        <div className="font-semibold text-sm text-orange-400 mb-1">{post.sub_title}</div>
    </div>
</div>

      <img className="w-full mt-1" src={post.image_url} alt={post.user_name} />
      
      <div className="flex items-center justify-between mx-3 mt-3">

    <div className="flex justify-start space-x-4 ">
             <button className="flex items-center hover:text-gray-500">
             {post.liked_post ? (
        <FavoriteIcon style={post.liked_post? { color: "red" ,fontSize: 36} : null} />
      ) : (
        <PiHeartStraightThin className="text-4xl"   />
      )}
             </button>
             
            <button className="flex items-center hover:text-gray-500">
                <PiShareFatThin   className="text-4xl" />
                <span className="ml-1"></span>
            </button>
            </div>
 <button className="flex items-center hover:text-gray-500 ">
      {!post.isSaved ? (
        <PiBookmarkSimpleThin className="text-4xl" />
      ) : (
        <BsBookmarkCheckFill className="text-4xl" style={{ color: 'aqua'}}  />
      )}
      <span className="ml-1"></span>
    </button>
        </div>

        <div className="flex items-center justify-start mx-3">

            <span className="ml-2.5 text-sm font-semibold">{post.likes}</span>
            { post.reply_count > 0 && (
            <span className="ml-10 text-sm font-semibold">{post.reply_count}</span>)}

    </div>
        

      <div className="px-3 py-4">
        <p className="text-gray-700 text-sm"><strong>{post.created_time}</strong> Min - <strong>{post.vieweds}</strong> Views - <strong>{post.comments}</strong> Comments </p>
      </div>

      <div className="px-3">
        <p className="text-gray-700 text-base font-bold">{post.content}</p>
      </div>

      <div className="px-6 pt-4 pb-2">
        {post.tags.map((tag, tagIndex) => (
          <span key={tagIndex} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #{tag}
          </span>
        ))}
      </div>

      <hr className="my-4" />
      <div className="px-3 py-4">
        <textarea
          className="w-full h-24 border rounded-md p-2 focus:outline-none focus:border-blue-400"
          placeholder="Write your comment here..."
        ></textarea>
         <div className="mt-2 flex justify-end">
         <button className=" hover:bg-gray-300 text-gray-600 w-20 rounded-xl  border border-gray-400">Post</button>

        </div>

      </div>
    </div>
  ))}
</div>


);


}

export default Posts;
