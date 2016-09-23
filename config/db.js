/**
 * Created by Rachel on 2016. 9. 17..
 */

var sequelize = require('sequelize');

// TODO: separate account info from source code
module.exports = new sequelize('sarasfit', 'root', '!bobbers7', {

  host : 'localhost',
  port : 3306,
  dialect : 'mysql',
  pool : {
    max : 100,
    min : 0,
    idle : 10000
  },
  omitNull: true,
  timezone: '+09:00'
});