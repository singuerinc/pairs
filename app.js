const env = process.env;
const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.resolve(__dirname, "build")));

app.get('/health', (req, res) => {
    res.status(200).end();
});

const server = require('http').createServer(app);
const io = require('socket.io')(server);
io.on('connection', function (socket) {
    socket.on('cell', function (cell) {
        io.emit('cell', cell);
    });
    socket.on('disconnect', function () {
    });
});

server.listen(env.NODE_PORT || 3001, env.NODE_IP || 'localhost', function () {
    console.log(`Application worker ${process.pid} started...`);
});
