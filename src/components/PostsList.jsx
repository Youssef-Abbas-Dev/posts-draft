import PostItem from "./PostItem";

const PostsList = ({ posts }) => {
  return (
    <div className="ms-3 w-50">
      {posts.map((post) => (
        <PostItem
          key={post.id}
          post={post}
        />
      ))}
    </div>
  );
};

export default PostsList;
