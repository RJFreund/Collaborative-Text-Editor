var express = require('express');
var router = express.Router();

module.exports = function(io){
  router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
  });

  io.sockets.on('connection', function(socket){
    console.log('A user has connected.');
    socket.on('textEditorUpdate', function(data){
      socket.broadcast.emit('textEditorUpdate', data);
    });
  });

  return router;
};