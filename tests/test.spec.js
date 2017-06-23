var code = {
  add: function(a , b ) {
      return new Promise( function( resolve, reject ) {
          // .....
          code.anotherFunction( a );
          resolve( a + b );
      }) ;
  }
  ,
  anotherFunction: () => {}
};



describe( "Tests", function() {

    it( "...test 01", function( done ) {
        var spy = spyOn( code, "add" ).and.callThrough();

        var result = code.add( 2, 3 );
        
        expect( result ).toEqual( jasmine.any( Promise ) );
        expect( result instanceof Promise ).toBe( true );

        result.then( function( res ) {
            expect( spy ).toHaveBeenCalled();
            expect( res ).toBe( 5 );
            done();
        }, function( error ) {
            done.fail( error );
        } ).catch( done.fail );
    } );

} );
