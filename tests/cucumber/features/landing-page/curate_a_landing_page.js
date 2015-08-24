module.exports = function () {

  this.Given( /^I have created a landing page with the heading "([^"]*)"$/, function ( heading ) {
    return this.server.call( 'page/create', {
      path: '/',
      heading: heading
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
