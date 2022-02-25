// io('http://dominio');

const socket = io()

// DOM elements
let message = document.getElementById('message')
let username = document.getElementById('username')
let button = document.getElementById('send')
let output = document.getElementById('output')
let actions = document.getElementById('actions')

button.addEventListener('click', () => {
    socket.emit('chat:message', {
        user: username.value,
        msg: message.value
    })
    console.log(username.value, message.value);
})

message.addEventListener('keypress', ()=>{
    socket.emit('chat:typing', username.value);
    console.log(username.value);
})

socket.on('chat:message', (data)=>{
    console.log(data);
    actions.innerHTML = ''
    output.innerHTML += `<p>
        <strong>${data.user}</strong>: ${data.msg}
    </p>`
})

socket.on('chat:typing', (data)=>{
    actions.innerHTML = `<p><em>${data} is typing...</em></p>`
})