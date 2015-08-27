Posts = new Mongo.Collection( 'posts' );
Pages = new Mongo.Collection( 'pages' );

if ( Meteor.isServer ) {
  Posts.remove( {} );
  i = Posts.insert( {
    _id: 'one',
    title: 'New Meteor Rocks',
    content: 'Yeah! Check our Meteor Blog for more!'
  } );
  ii = Posts.insert( {
    _id: 'two',
    title: 'My Book',
    category: 'landingPost',
    content: 'Something new soon.'
  } );
  iii = Posts.insert( {
    _id: 'three',
    title: 'My Secret Post',
    category: 'private'
  } );

}
