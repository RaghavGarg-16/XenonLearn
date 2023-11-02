const jwt = require( "jsonwebtoken" );
const createError = require( "../utils/createError" );

const verifyToken = ( req , res , next ) =>{
    const token = req.cookies.accessToken || req.cookies.AccessToken;
    if ( !token ) return next( createError(401 , "Not authenticated") )
    jwt.verify( token , process.env.Jwt , async( err , payload )=>{
        if ( err )  return next( createError( 401 , "Invalid Token" ) );
        req.userId = payload.id;
        req.isSeller = payload.isSeller;
        next()
    } )
} ;

module.exports = {verifyToken}