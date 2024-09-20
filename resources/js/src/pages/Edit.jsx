import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BASE_URL } from '../const';
import '../Main.css'; // Assuming you have the same CSS file for Create and Edit

function Edit() {
  const { id } = useParams(); // Get the ID from the URL params
  const navigate = useNavigate();
  const [post, setPost] = useState({
    title: '',
    body: '',
    age: '',
  });

  useEffect(() => {
    // Fetch the existing post data
    const fetchPost = async () => {
      try {
        const response = await axios.get(`${BASE_URL}api/details/${id}`);
        setPost(response.data);
      } catch (error) {
        console.error('Error fetching post data:', error);
      }
    };

    fetchPost();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost((prevPost) => ({ ...prevPost, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${BASE_URL}api/details/${id}`, post);
      navigate('/'); // Navigate back to the list page after successful edit
    } catch (error) {
      console.error('Error updating post:', error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="create-form animate-slide-in">
        <h2>Edit Post</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={post.title}
              onChange={handleChange}
              className="form-control input-animated"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="body" className="form-label">Description</label>
            <textarea
              id="body"
              name="body"
              value={post.body}
              onChange={handleChange}
              className="form-control input-animated"
              required
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="age" className="form-label">Age</label>
            <input
              type="number"
              id="age"
              name="age"
              value={post.age}
              onChange={handleChange}
              className="form-control input-animated"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary animate-bounce">Save Changes</button>
          <button type="button" onClick={() => navigate('/list')} className="btn btn-secondary animate-shake">Back to List</button>
        </form>
      </div>
    </div>
  );
}

export default Edit;
