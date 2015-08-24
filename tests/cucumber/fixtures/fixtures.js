Meteor.methods({
  'reset': function () {
    Posts.remove({});
  },
  'page/create': function (post) {
    Posts.insert(post);
  }
});
