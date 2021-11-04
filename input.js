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
    console.log(data);
  });
  stdin.resume();

  return stdin;
};

module.exports = {setupInput};