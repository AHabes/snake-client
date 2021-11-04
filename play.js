const net = require('net');

const connect = (host, port) => {

  const connection = net.createConnection({host: host, port: port});

  connection.setEncoding('utf-8');
  connection.on('connect', () => {
    connection.write('Hi from client');
  });
  return connection;
};


const connection = connect('165.227.47.243', 50541);

connection.on('data', data => {
  console.log('Message from server: ', data);
});