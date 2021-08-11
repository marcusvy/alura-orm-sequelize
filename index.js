const express = require('express');
const appRoutes = require('./api/routes');

const app = express();
const server_port = 3000;
const server_message = `Servidor online em http://localhost:${server_port}`;
const server_callback = () => console.log(server_message);

app.use(express.json());
appRoutes(app);
app.listen(server_port, server_callback)