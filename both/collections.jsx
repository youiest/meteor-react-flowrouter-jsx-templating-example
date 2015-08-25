Posts = new Mongo.Collection('posts');
Pages = new Mongo.Collection('pages');
log = loglevel.createLogger('ssr.collections', 'trace');
if (Meteor.isServer) {
  Posts.remove({});

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
    content: 'Something new soon.'
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
