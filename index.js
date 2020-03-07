const express = require ('express');
const cors = require ('cors');
const mongoose = require ('mongoose');
const passport = require ('passport');
const routes = require( './routes/route');

const MONGOOSE_URI = "mongodb://localhost/authenticUsers"
const PORT = 8000 || process.env.PORT;
const app = express();

require('./config/passport');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
app.use(passport.initialize());

app.use(routes);

mongoose.connect(MONGOOSE_URI,{useNewUrlParser : true,
useUnifiedTopology : true},(error)=>{
    if(!error){
        console.log('DB CONNECTED');
    
    app.listen(PORT,(error)=>{
        if(!error){
            console.log(`SERVER STARTED AT ${PORT}`);
        }
        
    })
  }
})
