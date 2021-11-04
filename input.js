const setupInput = function(connection) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.on('data', (data) => {
    if (data === '\u0003') {
      process.exit();
    }
    let command = "";
    switch (data) {
    case 'w':
      command = "Move: up";
      break;
    case 'a':
      command = "Move: left";
      break;
    case 's':
      command = "Move: down";
      break;
    case 'd':
      command = "Move: right";
      break;
    }
    connection.write(command);
  });
  stdin.resume();

  return stdin;
};

const sendMessages = function(connection) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.on('data', (data) => {
    if (data === '\u0003') {
      process.exit();
    }
    let command = "";
    switch (data) {
    case 'h':
      command = "Hi there!";
      break;
    case 't':
      command = "Take your time";
      break;
    case 'n':
      command = "Nice meeting you";
      break;
    case 'm':
      command = "Move the snake";
      break;
    default:
      command = 'unregistered key!';
    }
    connection.write(command);
  });
  stdin.resume();

  return stdin;
};

module.exports = {setupInput, sendMessages};