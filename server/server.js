require('./config/config');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser= require('body-parser');
const app = express();
const path = require('path');

//Habilitar la carpeta public
app.use(express.static(path.resolve(__dirname, '../public')))

//RUTAS - controler/index.js
app.use(require('./routes/index'))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

mongoose.connect(process.env.URLDB, {
  useNewUrlParser: true, useUnifiedTopology: true,},
  (err, res)=>{ 
    
    if (err) throw err;
    
    console.log('Base de datos ONLINE');
  });

  app.listen(process.env.PORT,()=>{
      console.log('Escuchando puerto: ', process.env.PORT);
    });


