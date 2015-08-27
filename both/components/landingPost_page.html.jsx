<template name="landingPost">
  <div>
    <a href="/">Back</a>
    <h3>{this.data.landingPost.title}</h3>
    <p>{this.data.landingPost.content}</p>
  </div>
</template>
Template.landingPost.helpers({
  landingPost: function () {
    return Posts.findOne({
      category: 'landingPost'
    }, {
      sort: {
        _id: -1
      },
      limit: 1
    });
  }
});
