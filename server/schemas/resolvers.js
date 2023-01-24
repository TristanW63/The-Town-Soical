const { AuthenticationError } = require("apollo-server-express");
const { User, Post } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate("posted").sort({ createdAt: -1 });
    },
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .populate("posted")
        .sort({ createdAt: -1 });
    },
    posts: async (parents, { username }) => {
      const params = username ? { username } : {};
      return Post.find(params).populate("posts").sort({ createdAt: -1 });
    },
    post: async (parent, { postId }) => {
      return Post.findOne({ _id: postId });
    },
    comments: async (parents, { username }) => {
      const params = username ? { username } : {};
      return Post.find(params).populate("posts").sort({ createdAt: -1 });
    },
    liked: async (parents, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate({
          path: "liked",
          options: { sort: { createdAt: -1 } },
        })
      }
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate({
          path: "posted",
          options: { sort: { createdAt: -1 } },
        });
      }
      throw new AuthenticationError("You must be logged in!");
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError("Incorrect login credentials!");
      }

      const correctPW = await user.isCorrectPassword(password);
      if (!correctPW) {
        throw new AuthenticationError("Incorrect login credentials!");
      }

      const token = signToken(user);
      return { token, user };
    },
    addPost: async (parent, { postText, postAuthor }, context) => {
      const post =  await Post.create({
        postText,
        postAuthor,
      })
        .then((post) => {
          return User.findOneAndUpdate(
            { _id: context.user._id },
            { $addToSet: { posted: post._id } },
            { new: true }
          );
        })
        return { post }
    },
    updatePost: async (parent, { postId, postText }, context) => {
      const currentUser = await User.findOne({ _id: context.user._id });
      const post = await Post.findOne({ _id: postId });
      if (post.postAuthor !== currentUser.username) {
        throw new AuthenticationError("You are not the author of this post and cannot update it.");
      }
      return Post.findOneAndUpdate(
        { _id: postId },
        { postText },
        { new: true }
      )
    },
    
    
    addComment: async (
      parent,
      { postId, commentId, commentText, commentAuthor, createdAt }
    ) => {
      return Post.findOneAndUpdate(
        { _id: postId },
        {
          $inc: { commentCount: 1 },
          $addToSet: {
            comments: { commentId, commentText, commentAuthor, createdAt },
          },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    addLike: async (parent, { postId }, context) => {
      return Post.findOneAndUpdate(
        { _id: postId },
        {
          $inc: { likeCount: 1 },
        },
        {
          new: true,
          runValidators: true,
        }
      )
        .then((post) => {
          return User.findOneAndUpdate(
            { _id: context.user._id },
            { $addToSet: { liked: post._id } },
            { new: true }
          );
        })
        .then((userLike) => {
          return userLike;
        });
    },
    },
    };

module.exports = resolvers;
