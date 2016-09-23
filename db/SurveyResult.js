/**
 * Created by Rachel on 2016. 9. 17..
 */

var Sequelize = require('sequelize');
var db = require('../config/db');

var SurveyResult = db.define('SurveyResult',{

  id : {
    type : Sequelize.INTEGER(11),
    allowNull : false,
    primaryKey : true,
    autoIncrement: true
  },
  birth : {
    type : Sequelize.STRING(45),
    allowNull : true
  },
  chestShapeFrontCd : {
    type : Sequelize.STRING(45),
    allowNull : true
  },
  chestShapeSideCd : {
    type : Sequelize.STRING(45),
    allowNull : true
  },
  braSpaceCd : {
    type : Sequelize.STRING(45),
    allowNull : true
  },
  braWearCd : {
    type : Sequelize.STRING(45),
    allowNull : true
  },
  brandName : {
    type : Sequelize.STRING(45),
    allowNull : true
  },
  brandBust : {
    type : Sequelize.STRING(45),
    allowNull : true
  },
  brandCup : {
    type : Sequelize.STRING(45),
    allowNull : true
  },
  brandHookCd : {
    type : Sequelize.STRING(45),
    allowNull : true
  },
  brandSize : {
    type : Sequelize.STRING(45),
    allowNull : true
  },
  brandPad : {
    type : Sequelize.STRING(45),
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


module.exports = SurveyResult;