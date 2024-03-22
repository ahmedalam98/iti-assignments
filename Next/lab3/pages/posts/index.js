import React, { useEffect, useState } from "react";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState("");
  const [updateIndex, setUpdateIndex] = useState(null);
  const [updateText, setUpdateText] = useState("");

  const fetchData = async () => {
    const res = await fetch("/api/posts");
    const data = await res.json();
    setPosts(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAddPost = async () => {
    const res = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({ post: newPost }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setNewPost("");
    fetchData();
  };

  const handleDelete = async (postId, index) => {
    const res = await fetch(`/api/posts/${postId}`, {
      method: "DELETE",
    });
    fetchData();
    if (updateIndex === index) {
      setUpdateIndex(null);
    }
  };

  const handleUpdateClick = (index) => {
    setUpdateIndex(index);
    setUpdateText(posts[index].text);
  };

  const handleUpdatePost = async (postId) => {
    const res = await fetch(`/api/posts/${postId}`, {
      method: "PUT",
      body: JSON.stringify({ text: updateText }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    fetchData();
    setUpdateIndex(null);
  };

  return (
    <div className="container">
      {posts.map((post, index) => (
        <div key={post.id} className="post">
          <div className="mx-3">ID: {post.id}</div>
          {updateIndex === index ? (
            <>
              <input
                type="text"
                value={updateText}
                onChange={(e) => setUpdateText(e.target.value)}
              />
              <button
                className="btn btn-primary  mx-3"
                onClick={() => handleUpdatePost(post.id)}
              >
                Save
              </button>
            </>
          ) : (
            <>
              <div className="text">{post.text}</div>
              <button
                className="btn btn-success mx-3"
                onClick={() => handleUpdateClick(index)}
              >
                Update
              </button>
            </>
          )}
          <button
            className="btn btn-danger"
            onClick={() => handleDelete(post.id, index)}
          >
            Delete
          </button>
        </div>
      ))}

      <div className="add">
        <input
          type="text"
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
        />
        <button className="btn btn-success" onClick={handleAddPost}>
          Add Post
        </button>
      </div>
    </div>
  );
}
