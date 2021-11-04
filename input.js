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

module.exports = {setupInput};