const { AuthenticationError } = require("apollo-server-express");
const { User, Post } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate("posts");
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate("posts");
    },
    posts: async (parents, { username }) => {
      const params = username ? { username } : {};
      return Post.find(params).populate("").sort({ createdAt: -1 });
    },
    post: async (parent, { postId }) => {
      return Post.findOne({ _id: postId });
    },

    //     likes: async () => {
    // return Post.find().populate('likes');
    //     },
    //   comments: async () => {
    // return Post.find().populate('comments');
    //   },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate("posts");
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
      console.log(context.user._id);
      Post.create({
        postText,
        postAuthor,
      })
        .then((post) => {
          console.log(post)
          return User.findOneAndUpdate(
            { _id: context.user._id },
            { $addToSet: { posts: post._id } },
            { new: true }
          );
        })
        .then((userPost) => {
          console.log(userPost);
          return userPost;
        });
      // throw new AuthenticationError('You need to be logged in!');
    },
    addComment: async (
      parent,
      { postId, commentId, commentText, commentAuthor }
    ) => {
      return Post.findOneAndUpdate(
        { _id: postId },
        {
          $addToSet: {
            comments: { commentId, commentText, commentAuthor },
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
          $addToSet: {

            likes: { liker: context.user.username }
          }
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
  },
};

module.exports = resolvers;
