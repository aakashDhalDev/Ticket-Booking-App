const express = require('express');
const {serverConfig, Logger} = require('./config');
const apiRoutes = require('./routes');

const app = express();

app.use('/api', apiRoutes);

app.listen(serverConfig.PORT, ()=>{
    console.log(`Example app listening to port ${serverConfig.PORT}`);
    Logger.info("Succesfully started the server", {msg: "Something"});
})