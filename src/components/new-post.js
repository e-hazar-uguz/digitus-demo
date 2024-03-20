import React from 'react';
import { PiPlusThin } from "react-icons/pi";
import { BsEmojiGrin } from "react-icons/bs";

const NewPost = () => {
    
return (

<div className='mt-16'>
   
<div className="max-w-xl rounded-2xl overflow-hidden shadow-lg mt-16 bg-white mb-10">
<div className='flex justify-between'>
<img
        className="h-12 w-12 rounded-full mt-16 ml-4"
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt=""
    />
<textarea
          className="w-full h-24 border rounded-md p-2 focus:outline-none bg-gray-100 mx-4 my-12"
          placeholder="Write something here"></textarea>

</div>
<div className='flex justify-end mx-2'>

                <button className=" hover:text-gray-500">
                <BsEmojiGrin   className="text-3xl opacity-30 mx-6" />
                <span className="ml-1"></span>
                </button>

                <button className=" hover:text-gray-500">
                <PiPlusThin   className="text-3xl" />
                <span className="ml-1"></span>
                </button>
                </div>              
 </div>
 
</div>


);


}

export default NewPost;
