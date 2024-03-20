import React, { useState, useEffect } from 'react';
import miniPostData from '../datas/mini-post-data.json'
const MiniPosts = () => {
    
    const [miniPostList, setMiniPostList] = useState([]);  

    useEffect(() => {
        setMiniPostList(miniPostData);
      }, []);

return (

<div className='mt-16'>
  {miniPostList.map((post, index) => (
    <div key={index} className="max-w-48 rounded-lg overflow-hidden shadow-lg mb-4 bg-white">
<div className="flex items-center space-x-1 mt-1">
    <img
        className="h-6 w-6 rounded-full mx-2"
        src={post.user_image}
        alt=""
    />
    <div>
        <div className="font-bold text-xs">{post.user_name}</div>
    </div>
</div>

      <img className="w-full mt-1" src={post.image_url} alt={post.user_name} />

      <div className="px-3 mt-2">
        <p className="text-gray-700 text-xs font-bold">{post.content}</p>
      </div>

      <div className="px-3 py-4">
        <p className="text-gray-700 text-sm"><strong>{post.likes}</strong> Likes - <strong>{post.comments}</strong> Comments </p>
      </div>

    </div>
  ))}
</div>


);


}

export default MiniPosts;
