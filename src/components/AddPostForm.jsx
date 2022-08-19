import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddPostForm = ({ addPost, currenPost, editPost }) => {
  const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");

  // Form Submit Handler
  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (username.trim() === "" || description.trim() === "") {
      return toast.error("Please fill the inputs");
    }

    const today = new Date();
    const date = today.toDateString();
    const time = today.toLocaleTimeString();

    if (currenPost === null) {
      addPost({ username, description, date, time });
    } else {
      editPost({ username, description, date, time, id: currenPost?.id });
    }

    setUsername("");
    setDescription("");
  };

  useEffect(() => {
    if (currenPost !== null) {
      setUsername(currenPost.username);
      setDescription(currenPost.description);
    } else {
      setUsername("");
      setDescription("");
    }
  }, [currenPost]);

  return (
    <div className="w-50 border p-3 rounded">
      <ToastContainer />
      <h2
        className={
          currenPost !== null
            ? "text-center text-success"
            : "text-center text-primary"
        }
      >
        {currenPost !== null ? "Edit " : "Add "}
        Post Form
      </h2>
      <form onSubmit={formSubmitHandler}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            className="form-control"
            id="username"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="form-control"
            id="description"
            rows="5"
          ></textarea>
        </div>
        <button
          className={
            currenPost !== null
              ? "btn btn-success w-100"
              : "btn btn-primary w-100"
          }
          type="submit"
        >
          {currenPost !== null ? "Edit " : "Add "} Post
        </button>
      </form>
    </div>
  );
};

export default AddPostForm;
