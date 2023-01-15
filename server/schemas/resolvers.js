const { AuthenticationError } = require("apollo-server-express");
const { User, Post } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('post');
    },
    user: async (parent, {username}) => {
      return User.findOne({ username }).populate('posts')
    },
    posts: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Post.find(params).sort({ createdAt: -1 });
    },
    post: async (parent, { postId }) => {
      return Post.findOne({ _id: postId });
    },
    // me: async (parent, args, context) => {
    //   if (context.user) {
    //     return User.findOne({ _id: context.user._id }).populate('posts');
    //       // .select("-__v -password")

    //     // return userData;
    //   }
    //   throw new AuthenticationError("You must be logged in!");
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
    addPost: async (parent, { postText, postAuthor }) => {   
        const post = await Post.create({
          postText,
          postAuthor
        });

        await User.findOneAndUpdate(
          { username: postAuthor },
          { $addToSet: { posts: post._id } }
        );

        return post;
      
      // throw new AuthenticationError('You need to be logged in!');
    },
    addComment: async (parent, { postId, commentText, commentAuthor }) => {
        return Post.findOneAndUpdate(
          { _id: postId },
          {
            $addToSet: {
              comments: { commentText, commentAuthor },
            },
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
