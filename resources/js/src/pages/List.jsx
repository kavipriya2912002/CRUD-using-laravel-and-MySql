import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BASE_URL } from '../const';
import '../Main.css'; // Assuming you will add custom styles and animations here
import { Link } from 'react-router-dom';

function List() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch posts data from the API
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`${BASE_URL}api/details`); // Adjust the API endpoint as needed
        console.log('Fetched data:', response.data.data); // Log data to verify its structure

        // Ensure posts is an array
        if (Array.isArray(response.data.data)) {
          setPosts(response.data.data);
        } else {
          console.error('Data is not an array:', response.data.data);
          setPosts([]);
        }
      } catch (error) {
        console.error('Error fetching posts:', error);
        setPosts([]); // Set posts to empty array on error
      }
    };

    fetchPosts();
  }, []);

  // Handle delete post
  const handleDelete = async (postId) => {
    try {
      await axios.delete(`${BASE_URL}api/details/${postId}`);
      setPosts(posts.filter(post => post.id !== postId));
      console.log('Post deleted:', postId);
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  return (
    <div className="list-page-background container mt-5">
      <div className="d-flex justify-content-between mb-4">
        <h2>Posts List</h2>
        <Link to="/create" className="btn btn-primary mt-2">Create New Post</Link>
      </div>
      <table className="table table-striped table-hover table-responsive">
        <thead className="thead-dark">
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.length > 0 ? (
            posts.map((post) => (
              <tr key={post.id} className="animated-row">
                <td>{post.title}</td>
                <td>{post.body}</td>
                <td>{post.age}</td>
                <td>
                  <Link to={`/edit/${post.id}`} className="btn btn-warning btn-sm me-2">Edit</Link>
                  <button onClick={() => handleDelete(post.id)} className="btn btn-danger btn-sm">Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center">No posts available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default List;
