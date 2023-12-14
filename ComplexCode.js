/*
  Filename: ComplexCode.js

  Description: This code is a complex implementation of a social media application that allows users to create posts, comment on posts, like posts, and follow other users. It uses object-oriented programming principles and demonstrates advanced JavaScript concepts.

  Author: [Your Name]
  Date: [Current Date]
*/

// User class representing a social media user
class User {
  constructor(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.posts = [];
    this.comments = [];
    this.likes = [];
    this.following = [];
  }

  createPost(content) {
    const post = new Post(content, this);
    this.posts.push(post);
    return post;
  }

  commentOnPost(post, message) {
    const comment = new Comment(message, this);
    post.addComment(comment);
    this.comments.push(comment);
  }

  likePost(post) {
    if (!this.likes.includes(post)) {
      post.addLike(this);
      this.likes.push(post);
    } else {
      console.log('You have already liked this post.');
    }
  }

  followUser(user) {
    if (!this.following.includes(user)) {
      this.following.push(user);
    } else {
      console.log('You are already following this user.');
    }
  }
}

// Post class representing a social media post
class Post {
  constructor(content, user) {
    this.content = content;
    this.user = user;
    this.comments = [];
    this.likes = [];
  }

  addComment(comment) {
    this.comments.push(comment);
  }

  addLike(user) {
    this.likes.push(user);
  }
}

// Comment class representing a comment on a post
class Comment {
  constructor(message, user) {
    this.message = message;
    this.user = user;
  }
}

// Usage example

// Create users
const user1 = new User('John', 25, 'john@example.com');
const user2 = new User('Sarah', 30, 'sarah@example.com');
const user3 = new User('Mike', 22, 'mike@example.com');

// User1 creates posts
const post1 = user1.createPost('Hello world!');
const post2 = user1.createPost('This is a complex code example in JavaScript.');
const post3 = user1.createPost('I love coding!');

// User2 comments on User1's posts
user2.commentOnPost(post1, 'Nice post!');
user2.commentOnPost(post2, 'Great example!');

// User3 likes User1's posts
user3.likePost(post1);
user3.likePost(post2);
user3.likePost(post2); // Already liked message

// User1 follows User2
user1.followUser(user2);
user1.followUser(user2); // Already following message

// Output example
console.log(user1.posts);
console.log(user2.comments);
console.log(user3.likes);
console.log(user1.following);