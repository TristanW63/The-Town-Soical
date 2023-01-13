const { Schema, model } = require('mongoose');

const PostSchema = new Schema({ 
Post: {
    type: String,
    minlength: [1, "need a better post"],
    maxlength: [200, "chill out man"]
},
user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
},
likeCount: {
    type: Number,
    default: 0
}
});

const Post = model('Post', PostSchema);
module.exports = Post;
