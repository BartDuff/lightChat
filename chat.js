//connection
var socket = io.connect('http://localhost:3000');
var message = document.getElementById('message');
var userName = document.getElementById('userName');
var sendMessage = document.getElementById('sendMessage');
var chatroom = document.getElementById('chatroom');

sendMessage.addEventListener('click', () => {
    socket.emit('new_message', {
        message: message.value,
        userName: userName.value
    })
});
socket.on('new_message', (data) => {
    chatroom.innerHTML += `<p class="collection-item cyan darken-3">${data.userName}: ${data.message}</p>`
});