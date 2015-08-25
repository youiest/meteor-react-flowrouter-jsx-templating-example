Posts = new Mongo.Collection('posts');
Pages = new Mongo.Collection('pages');
log = loglevel.createLogger('ssr.collections', 'trace');
if (Meteor.isServer) {
  Posts.remove({});
  p = []
  a = {
    _id: 'one',
    title: 'New Meteor Rocks',
    content: 'Yeah! Check our Meteor Blog for more!'
  }
  //Posts.insert(a);
  b = {
    _id: 'two',
    title: 'MeteorHacks + Kadira => Kadira++',
    content: 'Something new soon.'
  }
  //Posts.insert(b);
  c = {
    _id: 'three',
    title: 'My Secret Post',
    category: 'private'
  };
  //Posts.insert(c);
  var po = {}
  for (var i in [a,b,c]){
    Posts.insert(i)
  }
}
