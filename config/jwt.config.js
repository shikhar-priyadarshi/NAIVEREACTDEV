const jwt = require( 'jsonwebtoken');
const Secret = "Express";



//GENERATE TOKEN - 
const tokenGenerator = user => {
    
    let Token = jwt.sign( { exp : 3600, sub : user.id }, Secret)
    return Token;
}

module.exports = tokenGenerator;
//JWT.SIGN(PAYLOAD, SECRET KEY OR PRIVATE KEY , [OPTIONS,CALLBACKFN]);