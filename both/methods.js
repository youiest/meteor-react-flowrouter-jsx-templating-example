Meteor.methods({
  'resetPosts': function () {
    Posts.remove({});
  },
  'posts/create': function (post) {

    Posts.insert(post);
  },
  'posts/createDefault': function () {
// tests call them pages... landing post?!
    a = {
      _id: 'one',
      title: 'New Meteor Rocks',
      content: 'Yeah! Check our Meteor Blog for more!',
      category: 'landingPost'
    }
    Posts.insert(a);
    b = {
      _id: 'two',
      title: 'MeteorHacks + Kadira => Kadira++',
      content: 'Something new soon.',
      category: 'landingPost'
    }
    Posts.insert(b);
    c = {
      _id: 'three',
      title: 'My Secret Post',
      category: 'private'
    };
    Posts.insert(c);
  }
});
