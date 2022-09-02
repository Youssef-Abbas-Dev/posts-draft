const AddPostForm = () => {
  return (
    <div className="w-50 border p-3 rounded">
      <h2 className="text-center text-primary">Add Post Form</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input type="text" className="form-control" id="username" />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="description"
            rows="5"
          ></textarea>
        </div>
        <button className="btn btn-primary w-100" type="submit">
          Add Post
        </button>
      </form>
    </div>
  );
};

export default AddPostForm;
