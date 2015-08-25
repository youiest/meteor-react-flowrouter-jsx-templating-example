Meteor.methods({
  'resetPosts': function () {
    Posts.remove({});
  },
  'posts/create': function (page) {
// tests call them pages... landing post?!
    Posts.insert(page);
  }
});
