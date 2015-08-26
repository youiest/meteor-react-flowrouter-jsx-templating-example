module.exports = function () {

  this.Given( /^I have created a landing page with the heading "([^"]*)"$/, function ( heading ) {

    return this.server.call( 'page/create', {
      // this should be to a particular post
      _id: 'six',
      content: 'REACT! You FROM ... go TO ... and do what comes natural'
      path: '/',
      // heading should derived from path or viceversa
      heading: heading,
      title: heading
    } );
  } );

  this.When( /^a user navigates to the landing page$/, function () {
    return this.client.url( process.env.ROOT_URL );
  } );

  this.Then( /^they see the heading "([^"]*)"$/, function ( heading ) {
    return this.client.
    waitForExist( 'h1' ).
    getText( 'h1' ).should.become( heading );
  } );

};
