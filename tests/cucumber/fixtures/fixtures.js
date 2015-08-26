Meteor.methods({
  'reset': function () {
    Posts.remove({});
  },
  'page/create': function (page) {
    Posts.insert(page);
  }
});
