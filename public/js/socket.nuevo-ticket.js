//Comando para establecer la conexion con el server

var socket = io();

var label = $('#lblNuevoTicket')

socket.on('connect', function() {
    console.log('Conectado con el servidor');
});

socket.on('disconect', function() {
    console.log('Perdimmos conexión con el servidor');
})

socket.on('estadoActual', function(res) {
    label.text(res.actual)
})

$('button').on('click', function() {
    socket.emit('siguienteTicket', null, function(siguienteTicket) {
        label.text(siguienteTicket);
    });
})