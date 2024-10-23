import React from 'react'
import "../App.css";
import Comment from './comment';

const comments = [
  {
    id: 1,
    comment: "comment1",
    message: "this is my comment 1",
    replies: [{
      id: 11,
      comment: "comment11",
      message: "this is my comment 11",
      replies:[{
        id: 12,
        comment: "comment12",
        message: "this is my comment 12",
        replies:[{
          id: 13,
          comment: "comment13",
          message: "this is my comment 13",
        }],
      }],
    }],
  },
  {
    id: 2,
    comment: "comment2",
    message: "this is my comment 2",
    replies: [{
      id: 22,
      comment: "comment22",
      message: "this is my comment 22",
    }]
  }
]

function NestedComments() {
  return (
    <div className='nestedComments'>
  <Comment comments={comments}/>
    </div>
  )
}

export default NestedComments