const express = require('express');
const app = express();

const SocketIO = require('socket.io');
console.log(SocketIO);

// settings
app.set('port', process.env.PORT || 3000);

// files static
app.use(express.static('public'));


// start server
const server = app.listen(app.get('port'), () => {
    console.log('Server online http://localhost:' + app.get('port'));
})

// websockets init
const io = SocketIO(server);

// websockets
io.on('connection', (socket) => {
    console.log('new connection', socket.id);
})
