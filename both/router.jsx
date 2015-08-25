// here let's route / to the lastest landingPost natural/sort

FlowRouter.route("/", {
  name: 'landingPost',
  subscriptions: function () {
    var latestGetId = 'one'
    var nope = function () {
      return Posts.findOne({
        category: {
          $ne: "private"
        }
      })._id
    }
    this.register('singlePost', Meteor.subscribe('singlePost', latestGetId));
  },
  action: function () {
    var selector = {
      category: {
        $ne: "private"
      }
    };
    var latestId = Posts.findOne({
        category: {
          $ne: "private"
        }
      })._id
//expensive?
    ReactLayout.render(BlogLayout, {
      content: <PostPage _id={latestId}/>
    });
  }
});

FlowRouter.route('/post/:_id', {
  name: 'post',
  subscriptions: function (params) {
    this.register('singlePost', Meteor.subscribe('singlePost', params._id));
  },
  action: function (params) {
    ReactLayout.render(BlogLayout, {
      content: <PostPage _id={params._id}/>
    });
  }
});

FlowRouter.route("/PostList", {
  subscriptions: function () {
    var selector = {
      category: {
        $ne: "private"
      }
    };
    this.register('posts', Meteor.subscribe('posts', selector));
  },
  action: function () {
    ReactLayout.render(BlogLayout, {
      content: <PostList/>
    });
  }
});
