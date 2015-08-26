<template name="PostList">
  <div>
    
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
  }
});
