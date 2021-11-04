const {connect} = require('./client');

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

const setupInput = function(connection) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on('data', (data) => {
    if (data === '\u0003') {
      process.exit();
    }
    connection.write(data);
  });
  return stdin;
};

const connection = connect('165.227.47.243', 50541);

connection.on('connect', () => {
  console.log('Successfully connected to game server');
  connection.write('Name: AHS');
});

//autoPilot();
const stdin = setupInput(connection);

connection.on('data', data => {
  console.log('Message from server: ', data);
});