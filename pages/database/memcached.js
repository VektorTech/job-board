var Memcached = require('memcached');

const localhost = 'localhost:11211';
const memcached = new Memcached(localhost, { maxExpiration: (60*60*24*3) });

memcached.connect( localhost, function( err, conn ){
    if( err ) throw new Error( err );
    console.log( "Connected Memcached on server: " + conn.serverAddress );
});

module.exports = memcached;