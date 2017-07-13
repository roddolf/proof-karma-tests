const code = {
    add: ( a, b ) => {
        return new Promise( ( resolve, reject ) => {
            // .....
            code.anotherFunction( a );
            resolve( a + b );
        } );
    },
    anotherFunction: () => {
    }
};

describe( "Tests", () => {

    it( "...test 01", ( done ) => {
        const spy = spyOn( code, "add" ).and.callThrough();

        const promise = code.add( 2, 3 );

        expect( promise ).toEqual( jasmine.any( Promise ) );
        expect( promise instanceof Promise ).toBe( true );

        promise.then( ( addResult ) => {
            expect( spy ).toHaveBeenCalled();
            expect( addResult ).toBe( 5 );

            done();
        } ).catch( done.fail );
    } );

} );
