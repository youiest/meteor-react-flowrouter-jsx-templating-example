// here let's route / to the lastest landingPost natural/sort

FlowRouter.route("/", {
  name: 'landingPost',
  subscriptions: function () {
    this.register('singlePost', Meteor.subscribe('singlePost', 'one'));
  },
  action: function () {

    ReactLayout.render(BlogLayout, {
      content: <PostPage _id={'one'}/>
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
