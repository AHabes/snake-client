const net = require('net');

const connect = (host, port) => {
  const connection = net.createConnection({host: host, port: port});
  connection.setEncoding('utf-8');
  return connection;
};

module.exports = {connect};