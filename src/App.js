import { Fragment, useEffect, useState } from "react";
import AddPostForm from "./components/AddPostForm";
import Navbar from "./components/Navbar";
import PostsList from "./components/PostsList";

function App() {
  const [posts, setPosts] = useState([]);
  const [currenPost, setCurrentPost] = useState(null);

  // Fetch Posts
  const fetchPosts = async () => {
    const response = await fetch("http://localhost:5000/posts");
    const data = await response.json();
    setPosts(data);
  };

  // Get Post
  const getPost = async (postId) => {
    const response = await fetch(`http://localhost:5000/posts/${postId}`);
    const data = await response.json();
    setCurrentPost(data);
  };

  // Add Post
  const addPost = async (newPost) => {
    const response = await fetch("http://localhost:5000/posts", {
      method: "POST",
      body: JSON.stringify(newPost),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    setPosts((prev) => [...prev, data]);
  };

  // Remove Post
  const removePost = async (postId) => {
    await fetch(`http://localhost:5000/posts/${postId}`, {
      method: "DELETE",
    });

    const newData = posts.filter((p) => p.id !== postId);
    setPosts(newData);
  };

  // Edit Post
  const editPost = async (post) => {
    await fetch(`http://localhost:5000/posts/${post.id}`, {
      method: "PUT",
      body: JSON.stringify(post),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const newData = posts.map((p) => (p.id === post.id ? post : p));
    setPosts(newData);
  };

  // Use Effect
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <Fragment>
      <Navbar />
      <div className="container mt-4 d-flex align-items-start">
        <AddPostForm
          editPost={editPost}
          addPost={addPost}
          currenPost={currenPost}
        />
        <PostsList posts={posts} removePost={removePost} getPost={getPost} />
      </div>
    </Fragment>
  );
}

export default App;
