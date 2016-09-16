//these are just some sample.

export const increment = (index) =>{
  return {
    type: "INCREMENT_LIKES",
    index
  }
}

export const addComment = (postId, author, comment) =>{
  return {
    type: "ADD_COMMENT",
    postId,
    author,
    comment
  }
}
