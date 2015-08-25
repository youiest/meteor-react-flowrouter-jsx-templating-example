Meteor.methods({
  'reset': function () {
    Posts.remove({});
  },
  'page/create': function (page) {
    // tests call them pages... landing post?!
    Posts.insert(page);
  }
});
