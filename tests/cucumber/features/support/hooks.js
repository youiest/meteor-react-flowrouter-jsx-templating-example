module.exports = function () {
  this.Before(function () {
    return this.server.call('reset');
  });
  this.Before(function () {
    return this.server.call('resetPosts');
  });
  this.Before(function () {
    return this.server.call('post/create','REACT! You FROM ... got TO ... and do what comes natural!');
  });
};
