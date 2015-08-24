module.exports = function () {
  this.Given( /^I have created a landing page with the heading "([^"]*)"$/, function ( heading ) {
    return this.server.call( 'page/create', {
      path: '/',
      heading: heading
    } );
  } );

  this.When( /^a user navigates to the landing page$/, function ( callback ) {
    // Write code here that turns the phrase above into concrete actions
    callback.pending();
  } );

  this.Then( /^they see the heading "([^"]*)"$/, function ( arg1, callback ) {
    // Write code here that turns the phrase above into concrete actions
    callback.pending();
  } );

};
