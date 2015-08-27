<template name="BlogLayout">
  <div>
    <div className="navigation">
      <a href="/">Home</a>
        {this.props.landingPost}
    </div>  
    {this.props.content}
  </div>
</template>
