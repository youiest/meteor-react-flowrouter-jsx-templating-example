Meteor.methods({
  'reset': function () {
    Posts.remove({});
  },
  'post/create': function (post) {
    Posts.insert(post);
  }
});
