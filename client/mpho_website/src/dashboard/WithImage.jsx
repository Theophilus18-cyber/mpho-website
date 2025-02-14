import React, { useState } from 'react';
import usePostWithImage from '../custom_hooks/usePostWithImage';

const PostUserWithImage = () => {
  const { data, isPending, error, postData } = usePostWithImage('http://localhost:5000/api/users_image');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('image', image);  
    postData(formData);
    setName('');
    setEmail('');
    setImage(null);
  };

  return (
    <div>
      <h2>Add New User with Image</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Image:
          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            required
          />
        </label>
        <br />
        <button type="submit" disabled={isPending}>Add User</button>
      </form>
      {isPending && <p>Posting data...</p>}
      {error && <p>Error: {error}</p>}
      {data && <p>User added successfully!</p>}
    </div>
  );
};

export default PostUserWithImage;