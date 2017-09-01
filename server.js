'use strict';

const app = require('./app.js'),
      server = app.listen( app.get('port'), () => console.log(`Iniciando API CRUD Express con MySQL en el puerto ${app.get('port')}`));
      

