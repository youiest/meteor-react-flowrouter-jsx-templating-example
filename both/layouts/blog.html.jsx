<template name="BlogLayout">
  <div>
    <div className="navigation">
      <a href="/">Home</a>

    </div>
    <div>
      {this.props.landingPost}
    </div>
    {this.props.content}
  </div>
</template>
