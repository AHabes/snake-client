const {connect} = require('./client');

const connection = connect('165.227.47.243', 50541);

connection.on('data', data => {
  console.log('Message from server: ', data);
});