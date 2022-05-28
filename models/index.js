const req = require('express/lib/request');
const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');


// association between User and Blog Post (one-to-many)
User.hasMany(Post, {
    foreignKey: 'user_id'
});

Post.belongsTo(User, {
    foreignKey: 'user_id'
});

// association between Blog Post and Comment (one-to-many)
Post.hasMany(Comment, {
    foreignKey: 'post_id'
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id'
});

// association between user and comment (one-to-many)
User.hasMany(Comment, {
    foreignKey: 'user_id'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id'
});


module.exports = {User, Post, Comment};