const net = require('net');

const connect = (host, port, name) => {

  const connection = net.createConnection({host: host, port: port});

  connection.setEncoding('utf-8');
  connection.on('connect', () => {
    console.log('Successfully connected to game server');
    connection.write('Name: ' + name);
  });
  return connection;
};

module.exports = {connect};