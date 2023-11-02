const router = require( "express" ).Router();
const { savecontact, getContact } = require("../controller/contact.controller");
const { verifyToken } = require( "../middleware/jwt" );

router.post( "/savecontact" , savecontact ) ;
router.post( "/getcontact" , getContact ) ;

module.exports = router ;