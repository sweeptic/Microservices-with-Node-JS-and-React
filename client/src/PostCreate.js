import React, { useState } from 'react';
import axios from 'axios';

const PostCreate = () => {
  const [title, setTitle] = useState('');

  const onSubmit = async event => {
    event.preventDefault();
    await axios.post('http://localhost:4000', { title });
    setTitle('');
  };

  return (
    <div>
      <form onSubmit={onSubmit} className='form-group'>
        <div className='form-group'>
          <label>Title</label>
          <input
            className='form-control'
            value={title}
            onChange={event => setTitle(event.target.value)}
          />
        </div>
        <button className='btn btn-primary'>Submit</button>
      </form>
    </div>
  );
};

export default PostCreate;
