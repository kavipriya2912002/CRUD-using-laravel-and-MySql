import React, { useState } from 'react';
import '../Main.css'; // Link to your custom CSS
import { BASE_URL } from '../const';
import { useNavigate } from 'react-router-dom'; // For navigation

function Create() {
  const navigate = useNavigate(); // Hook for navigation
  // State to hold form data
  const [formData, setFormData] = useState({
    title: '',
    body: '',
    age: ''
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleBack = () => {
    navigate('/'); // Navigate to the previous page
  };
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Sending data using Axios to your API
    axios.post(`${BASE_URL}api/details`, formData)
      .then(response => {
        navigate('/')
        console.log('Response:', response.data);
        // You can show a success message or navigate to another page here
      })
      .catch(error => {
        console.error('Error:', error);
        // Handle error here, such as showing an error message
      });
  };

  return (
    <div className="container d-flex justify-content-center mt-5">
      <div className="create-form">
        <h2 className="text-center mb-4 animate-slide-in">Create Post</h2>
        <form onSubmit={handleSubmit} className="animate-fade-in">
          {/* Title field */}
          <div className="form-group mb-3">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control input-animated"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter title"
              required
            />
          </div>

          {/* Body field */}
          <div className="form-group mb-3">
            <label htmlFor="body">Description</label>
            <textarea
              className="form-control input-animated"
              id="body"
              name="body"
              value={formData.body}
              onChange={handleChange}
              placeholder="Enter body content"
              rows="4"
              required
            />
          </div>

          {/* Age field */}
          <div className="form-group mb-3">
            <label htmlFor="age">Age</label>
            <input
              type="number"
              className="form-control input-animated"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="Enter age"
              required
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary w-100 animate-bounce mb-3">
            Create
          </button>
        </form>

        {/* Back Button */}
        <button onClick={handleBack} className="btn btn-secondary w-100 animate-shake">
          Back
        </button>
      </div>
    </div>
  );
}

export default Create;
