const PostItem = ({ post }) => {
  return (
    <div className="border p-2 rounded mb-3 bg-light">
      <div className="d-flex align-items-center justify-content-between">
        <div className="text-success">
          Posted by: <b>{post.username}</b>
        </div>
        <div className="text-dark badge bg-warning">
          {`${post.date} ${post.time}`}
        </div>
      </div>
      <p className="my-4 text-dark">{post.description}</p>
      <div>
        <button  className="btn btn-dark">
          Edit Post
        </button>
        <button
          className="btn btn-danger ms-3"
        >
          Delete Post
        </button>
      </div>
    </div>
  );
};

export default PostItem;
