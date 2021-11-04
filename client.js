const net = require('net');

const connect = (host, port) => {

  const connection = net.createConnection({host: host, port: port});

  connection.setEncoding('utf-8');
  connection.on('connect', () => {
    connection.write('Hi from client');
  });
  return connection;
};

module.exports = {connect};