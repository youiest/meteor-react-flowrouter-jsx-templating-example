Posts = new Mongo.Collection('posts');
Pages = new Mongo.Collection('pages');
log = loglevel.createLogger('ssr.collections', 'trace');

if (Meteor.isServer) {
  Posts.remove({});
  Meteor.startup(function(){
      Meteor.call("posts/createDefault");
  });
}
