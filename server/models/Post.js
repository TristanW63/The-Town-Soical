const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const PostSchema = new Schema({ 
PostText: {
    type: String,
    minlength: [1, "need a better post"],
    maxlength: [200, "chill out man"]
},
postAuthor: {
    type: String,
    trim: true,
},
likeCount: {
    type: Number,
    default: 0
},
createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
},
Comments: [
    {
        commentText: {
            type: String,
            minlength: 1,
            maxlength: 280
        },
        commentAuther: {
            type: String
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (timestamp) => dateFormat(timestamp),
        }
    }
]
});

const Post = model('Post', PostSchema);
module.exports = Post;
