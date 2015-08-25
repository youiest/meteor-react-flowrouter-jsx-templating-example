log = loglevel.createLogger('ssr.optimists', 'trace');

call = function call(name, payload) {
  Meteor.call(name, name, payload, function (error, result) {
    if (error) {
      log.error("error", error);
    }
    if (result) {
      return (result)
    }
  });
}
Meteor.methods({
  addPost: function (name, page) {
    name = name || 'addPost'
    log = loglevel.createLogger(name);
    Posts.insert({
      _id: 'My Blog',
      title: 'My Blog',
      content: page
    });

    if (Meteor.isClient) {

      try {
        log.trace(name + ' isClient');
      } catch (e) {
        throw new Meteor.Error("bad-page", e);
      } finally {}

    }
    if (Meteor.isServer) {
      log.trace(name + ' isServer');
      return 'serverReturned'
    }
  }
});
