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
      title: 'My Book',
      content: 'Yeah! Check our Meteor Blog for more!',
      category: 'landingPost',
      landingPost: new Date().getTime()
    }
    Posts.insert(a);
    b = {
      _id: 'two',
      title: 'MeteorHacks + Kadira => Kadira++',
      content: 'Something new soon.',
      category: 'landingPost',
      landingPost: new Date().getTime()
    }
    Posts.insert(b);
    c = {
      _id: 'three',
      title: 'My Secret Post',
      category: 'private'
    };
    Posts.insert(c);
    return true
  }
});
