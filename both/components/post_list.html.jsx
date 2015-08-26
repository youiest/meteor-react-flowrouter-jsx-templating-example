<template name="PostList">
  <div>
    <h1>
      {this.data.posts[0].title}
    </h1>
    <ul>
      {this.data.posts.map(function(task) {
        var path = FlowRouter.path('post', {_id: task._id})
        return <li key={task._id}><a href={path}>{task.title}</a></li>
      })}
    </ul>
  </div>
</template>
Template.PostList.helpers({
  posts: function () {
    return Posts.find({}, {
      sort: {
        _id: 1
      }
    }).fetch();
  },
  landingPost: function () {
    log = loglevel.createLogger( 'post_list.landingPost', 'trace' );
    landingPost = Posts.find({
      category: 'landingPost'
    }, {
      sort: {
        _id: -1
      }
    }, {
      limit: 1
    }).fetch();
    log.trace(landingPost)
    return landingPost
  }
});
