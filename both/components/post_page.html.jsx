<template name="PostPage">
  <div>
    <a href="/PostList">Back</a>
    <h3>{this.data.post.title}</h3>
    <p>{this.data.post.content}</p>
  </div>
</template>

Template.PostPage.helpers({
  post: function() {
    return Posts.findOne({_id: this.props._id});
  }
});
