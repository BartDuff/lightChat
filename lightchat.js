const express = require('express');
const app = express();
//listening
const server = app.listen(3000);
//socket.io instanciation
const io = require('socket.io')(server);

//listen on every connection
io.on('connection', (socket) => {
    console.log('New user connected');
    socket.username = "Anonymous";
    socket.on('new_message', (data) => {
        socket.userName = data.userName;
        io.sockets.emit('new_message', { message: data.message, userName: socket.userName })
    })
})

//middleware
app.use(express.static(__dirname));

//routes
app.get('/', (req, res) => {
    res.render('index.html')
})