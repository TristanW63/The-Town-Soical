const { AuthenticationError } = require("apollo-server-express");
const { User } = require("../models");
const { Post } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select("-__v -password")

        return userData;
      }
      throw new AuthenticationError("You must be logged in!");
    },
  },

  Mutation: {
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

    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    addPost: async (parent, { postText }, context) => {
      if (context.user) {
        const post = await Post.create({
          postText,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { posts: post._id } }
        );

        return post;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
};

module.exports = resolvers;