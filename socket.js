'use strict';

const io = require('socket.io')(22079);
const cluster = require('cluster');

io.on('connection', (socket) => {
  console.log('conenctions');
  let i = 1e9;

  while (i > 0)
    i--;

  socket.emit('test', {
    id: cluster.worker.id
  });
});