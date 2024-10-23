import React, { useState } from "react";
import "../App.css";
import { imgUrlProfile } from "../constants";

function Comment({ comments }) {
  const [openComments, setOpenComments] = useState(comments.map(()=>false));

const toggleCommentVisibility = (index) => {
    console.log(index, 'index');
    setOpenComments((previousOpenComments)=>previousOpenComments.map((isOpen,i)=>(i === index ? !isOpen : isOpen))
)
}
console.log(openComments, 'openComments');
  return (
    <>
  {comments.map((comment, index)=> (
   <div key={comment.id} >
   <div className="comment">
        {comment?.replies?.length>0 && <button onClick={()=>toggleCommentVisibility(index)} style={{height:'20px', width:'20px', marginRight: '10px', cursor: "pointer"}}> {openComments[index] ? "-" : "+"}</button>}
      <img
        width={20}
        height={20}
        src={imgUrlProfile}
        alt="profile"
      />
      <div className="innerComment">
        <span>{comment.comment}</span>
        <span>{comment.message}</span>
      </div>
      </div>
        {openComments[index] && comment?.replies?.length>0 && (<div className="replies"><Comment comments={comment.replies}/></div>)}
    </div>))  }
    </>
  );
}

export default Comment;
