import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_POST } from '../../utils/mutations';
import { QUERY_POSTS, QUERY_USER } from '../../utils/queries';

import auth from '../../utils/auth';

const PostForm = () => {
    const [postText, setPostText] = useState('');
  
    const [characterCount, setCharacterCount] = useState(0);
  
    const [addPost, { error }] = useMutation(ADD_POST, {
      update(cache, { data: { addPost } })  {
        try {
          const { posts } = cache.readQuery({ query: QUERY_POSTS }) || {};
  
          cache.writeQuery({
            query: QUERY_POSTS,
            data: { posts: posts ? [addPost, ...posts] : [addPost] },
          });
        } catch (e) {
          console.error(e);
        }
  
        // update me object's cache
        const { user } = cache.readQuery({ query: QUERY_USER }) || {};
        cache.writeQuery({
          query: QUERY_USER,
          data: { user: { ...user, posts: [...user.posts, addPost] } },
        });
      },
    });
  
    const handleFormSubmit = async (event) => {
      event.preventDefault();
  
      try {
        const { data } = await addPost({
          variables: {
            postText,
            postAuthor: auth.getProfile().data.username,
          },
        });
  
        setPostText('');
      } catch (err) {
        console.error(err);
      }
    };
  
    const handleChange = (event) => {
      const { name, value } = event.target;
  
      if (name === 'postText' && value.length <= 280) {
        setPostText(value);
        setCharacterCount(value.length);
      }
    };
  
    return (
      <div>
        <h3>Think of post you pussy</h3>
        {auth.loggedIn() ? (
          <>
            <p
              className={`m-0 ${
                characterCount === 280 || error ? 'text-danger' : ''
              }`}
            >
              Character Count: {characterCount}/280
            </p>
            <form
              className="flex-row justify-center justify-space-between-md align-center"
              onSubmit={handleFormSubmit}
            >
              <div className="col-12 col-lg-9">
                <textarea 
                name='postText'
                onChange={handleChange}
                value={postText}
                ></textarea>
              </div>
  
              <div className="col-12 col-lg-3">
                <button className="btn btn-primary btn-block py-3" type="submit">
                  Add Thought
                </button>
              </div>
              {error && (
                <div className="col-12 my-3 bg-danger text-white p-3">
                  {error.message}
                </div>
              )}
            </form>
          </>
        ) : (
          <p>
          </p>
        )}
      </div>
    );
  };
  
  export default PostForm;