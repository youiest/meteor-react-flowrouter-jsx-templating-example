<template name="BlogLayout">
  <div>
    <div className="navigation">
      <a href="/PostList">Home</a>
    </div>
    <h1> My Blog </h1>
    {this.props.content}
  </div>
</template>
