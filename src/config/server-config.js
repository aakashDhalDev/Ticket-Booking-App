//const dotenv = require('dotenv');

const dotenv = require('dotenv').config({ path: require('find-config')('.env') });

module.exports = {
    PORT: process.env.PORT
}