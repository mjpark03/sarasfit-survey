/**
 * Created by Rachel on 2016. 9. 17..
 */

var Sequelize = require('sequelize');
var db = require('../config/db');

var CodeName = db.define('CodeName',{

  id : {
    type : Sequelize.INTEGER(11),
    allowNull : false,
    primaryKey : true,
    autoIncrement: true
  },
  code : {
    type : Sequelize.STRING(45),
    allowNull : true
  },
  name : {
    type : Sequelize.STRING(45),
    allowNull : true
  },
  description : {
    type : Sequelize.STRING(255),
    allowNull : true
  },
  createdAt: {
    type : Sequelize.DATE,
    allowNull : false
  },
  updatedAt: {
    type : Sequelize.DATE,
    allowNull : false
  },
  deletedAt: {
    type : Sequelize.DATE,
    allowNull : true
  }
});


module.exports = CodeName;