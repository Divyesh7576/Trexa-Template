const Model = require('../models/test');

module.exports = {
    name: 'messageCreate',
    async execute(message, client) {
        if(message.content == "!test"){
            // To create a document
            // let document = await Model.create({userID: message.author.id, balance: 1000});
            // await document.save();

            // To get the entries
            // let entry = await Model.findOne({userID: message.author.id}); // returns one document who matches the filter.
            // message.reply(`<@${entry.userID}> has ${entry.balance} Coins`);

            // To Update one document or entry
            // Method 1
            // let entry = await Model.findOne({userID: message.author.id}); // returns one document who matches the filter.
            // entry.balance += 250;
            // await entry.save();
            // Method 2
            // await Model.findOneAndUpdate({userID: message.author.id}, {$set: {balance: 100000}});
            // let entry = await Model.findOne({userID: message.author.id});

            // message.reply(`New balance is ${entry.balance} coins.`);

            // To Delete
            // Method 1
            // let entry = await Model.findOne({userID: message.author.id}); // returns one document who matches the filter.
            // await entry.delete();
            // Method 2
            // await Model.findOneAndDelete({userID: message.author.id});
        }

    },
    
};