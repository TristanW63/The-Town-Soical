import React, { useState } from "react";
import "./Post.css";
import { Form, Modal, Button } from "react-bootstrap";
import CommentList from "../Comment/Comment";
import LikeList from "../Likes/Likes";
import CommentForm from "../Comment/CommentForm";
import { useMutation, useQuery } from "@apollo/client";
import { UPDATE_POST } from "../../utils/mutations";
import { QUERY_POST } from "../../utils/queries";

const PostsList = ({
  posts,
  refetch,
  currentUsername,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [postText, setPostText] = useState("");
  const [postId, setPostId] = useState("");
  const[updatePost] = useMutation(UPDATE_POST);

  console.log(postId + postText);
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(postId + postText);
    try {
      const { data, error } = await updatePost({
        variables: {
          postId: postId,
          postText: postText,
        },
      });
      
      console.log(error);

      setPostText("");
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "postText") {
      setPostText(value);
    }
  };

  if (!posts.length) {
    return <div className="parent">
    <div style={{ fontSize: "6rem"}}> NO POSTS YET</div>
  </div>
  }


  return (
    <>
    <div className="postCard">
      {posts &&
        posts.map((post) => (
          <div key={post._id} className="card">
            <p className="author">{post.postAuthor}</p>
            <span className="date">{post.createdAt}</span>
            <p style={{ paddingLeft: "4%", paddingTop: "2%" }}>
              {post.postText}
            </p>
            <div style={{ paddingLeft: "2%" }}>
              <CommentForm postId={post._id} refetch={refetch} />
            </div>
            <p>
              <span style={{ marginRight: "3%", paddingLeft: "3%" }}>
                <LikeList postId={post._id} refetch={refetch} />{" "}
                {post.likeCount}
              </span>
              <CommentList comments={post.comments} /> {post.commentCount}
            </p>
            {post.postAuthor === currentUsername && (
              <button onClick={() => {setShowModal(true); setPostId(post._id)}}>Update</button>
            )}
          </div>
        ))}
    </div>
    <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby="signup-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title style={{ marginLeft: "35%", fontWeight: "600" }}>
            Update Post
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
              <Form onSubmit={handleFormSubmit}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Control
                    as="textarea"
                    name="postText"
                    onChange={handleChange}
                    value={postText}
                  />
                </Form.Group>
                <Button
                  id="post-btn"
                  variant="primary"
                  type="submit"
                  onClick={() => setShowModal(false)}
                >
                  Post
                </Button>
              </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default PostsList;
// likes={post.likes}
