import { Fragment } from "react";
import AddPostForm from "./components/AddPostForm";
import Navbar from "./components/Navbar";
import PostsList from "./components/PostsList";

const posts = [
  {
    username: "Youssef Abbas",
    description: "About Programming",
    date: "Fri Aug 19 2022",
    time: "4:35:18 PM",
    id: 1,
  },
  {
    username: "Alli Abbas",
    description: "About React JS In Arabic",
    date: "Tue Aug 30 2022",
    time: "4:33:41 PM",
    id: 2,
  },
];

function App() {
  return (
    <Fragment>
      <Navbar />
      <div className="container mt-4 d-flex align-items-start">
        <AddPostForm />
        <PostsList posts={posts} />
      </div>
    </Fragment>
  );
}

export default App;
