require('./config/config');
const express = require('express');
const mongoose = require('mongoose');
//const bodyParser= require('body-parser');

const app = express();
app.use(require('./controler/usuario'))

// parse application/x-www-form-urlencoded
//app.use(bodyParser.urlencoded({ extended: false }))
 // parse application/json
//app.use(bodyParser.json())
 
mongoose.connect(process.env.URLDB, {
  useNewUrlParser: true, useUnifiedTopology: true,},
  (err, res)=>{ 
    
    if (err) throw err;
    
    console.log('Base de datos ONLINE');
  });

  app.listen(process.env.PORT,()=>{
      console.log('Escuchando puerto: ', process.env.PORT);
    });


