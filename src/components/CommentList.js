import React from 'react';
import Comment from './Comment.js';

class CommentList extends React.Component {
  render(){
const commentComponents = this.props.movies.map((comment, index) => {
  return <Comment film={comment.film} key={index}>{comment.text}</Comment>
})

    return(
      <div className="comment-list">
        {commentComponents}
      </div>
    )
  }
}
export default CommentList;
