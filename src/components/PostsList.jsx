import PostItem from "./PostItem";

const PostsList = ({ posts, removePost, getPost }) => {
  return (
    <div className="ms-3 w-50">
      {posts.map((post) => (
        <PostItem
          key={post.id}
          post={post}
          removePost={removePost}
          getPost={getPost}
        />
      ))}
    </div>
  );
};

export default PostsList;
