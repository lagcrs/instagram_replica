const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const app = express();

//server tem acesso ao http e conexoes via web sockets
const server = require('http').Server(app);
const io = require('socket.io')(server);

mongoose.connect('mongodb+srv://root:root@cluster0-fwrdb.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

//criando o proprio middleware para que o io tenha acesso as rotas
app.use((req, res, next) => {
    req.io = io;
    next();
});

//medida de segurança para permitir acesso do frontend (urls de diferentes servidores)
app.use(cors());

app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'resized')));

app.use(require('./routes'));
server.listen(3333);