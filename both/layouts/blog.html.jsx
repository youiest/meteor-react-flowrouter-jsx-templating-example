<template name="BlogLayout">
  <div>
    <div className="navigation">
      <a href="/">Home</a>
    </div>
    <h1>
      {this.data.landingPost.title}
    </h1>
    {this.props.content}
  </div>
</template>
Template.BlogLayout.helpers({
  landingPost: function () {
    //log = loglevel.createLogger( 'post_list.landingPost', 'trace' );
    //log.info(landingPost)
    return Posts.find({
      category: 'landingPost'
    }, {
      sort: {
        _id: -1,
        limit: 1
      }
    })
  }
});
