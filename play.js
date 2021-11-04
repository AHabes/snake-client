const {connect} = require('./client');
const {setupInput, sendMessages} = require('./input');
const { IP, PORT, NAME} = require("./constants");

const autoPilot = () => {
  connection.on('connect', () => {
    let delay = 0;
    console.log('Moving the snake');
    const moves = ["Move: up", "Move: right", "Move: right", "Move: right", "Move: down", "Move: left"];
    moves.forEach(move => {
      setTimeout(() => {
        connection.write(move);
        console.log(move);
      }, delay += 1000);
    });
  });
};

console.log("Connecting ...");

const connection = connect(IP, PORT);

connection.on('connect', () => {
  console.log('Successfully connected to game server');
connection.write('Name: '.concat(NAME));
});

setupInput(connection);
sendMessages(connection);

connection.on('data', data => {
  console.log('Message from server: ', data);
});