var code = {
  suma: function(a , b ) {
      return new Promise( function( resolve, reject ) {
          // .....
          code.otraFunction( a );
          resolve( a + b );
      }) ;
  }
  ,
  otraFunction: () => {}
};



describe( "Tests", function() {

    it( "test 01", function( done ) {
        var spy = spyOn( code, "suma" ).and.callThrough();

        var result = code.suma( 2, 3 );
        
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
