const mongoose = require('mongoose') // npm i mongoose@6.0.2
const mongodbURL = process.env.MONGODBURL;

module.exports = {
    name: 'ready',
    once: true,
    async execute (client) {
        console.log ('Client is ready to be use right now');

        mongoose.connect(mongodbURL || ``, {
            keepAlive: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }).catch(e => console.log("Database is not connected."));

        mongoose.connection.once("open", () => console.log("Database is running!"))
    }
}