const User = require('../models/Users');
const signToken = require('../config/jwt.config');

function controller (){
    
    this.register = (req,res) =>{
                     
       if(req.user){
        res.json({
            msg : req.authInfo 
        })     
       } 
      else{
          res.status(505).json({
              msg: 'Internal Server Error'
          })
      }
    }

    this.login = async ( req, res) =>{
        if(req.user){
            let token = await signToken(req.user._id);
            if(token){
                res.json({ token });
            }
            else{
                res.status(505).json({
                    msg: 'Internal Server Error'
                })
            }
        }
    }
    this.logout = ( req, res) => {
        console.log('Logout');
    }
}

module.exports = new controller();