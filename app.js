console.log("Starting app.js");

const express = require('express');
const app = express();
const yargs = require('yargs');
const fs = require('fs');
const hbs = require('hbs');

const foodItems = require('./foodItems');
const fileSystem = require('./fileSystem');
const billManager = require('./billManager')

// app.set('view engine', 'hbs');

const argv = yargs
            .options('food', {
              alias : 'f',
              demand : true
            })
            .argv;

var log = foodItems.foodDetails(argv.f);
fileSystem.itemTrack(log);
 console.log(billManager.calculateBill());

app.get('/', (req, res) => {
  res.render('home.hbs', {
    title : 'Your Total Bill is ',
    message : `${billManager.calculateBill()} Rs`
  });
});

app.listen(3000, () => {
  console.log('Starting server port 3000');
});
