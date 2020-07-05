'use strict';

var utils = require('../utils/writer.js');
var Auser = require('../service/AuserService');

module.exports.auserDescribeGET = function auserDescribeGET (req, res, next) {
  var describe = req.swagger.params['describe'].value;
  Auser.auserDescribeGET(describe)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.auserImageAGET = function auserImageAGET (req, res, next) {
  var imageA = req.swagger.params['imageA'].value;
  Auser.auserImageAGET(imageA)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.ausersGET = function ausersGET (req, res, next) {
  var limit = req.swagger.params['limit'].value;
  var offset = req.swagger.params['offset'].value;
  var search = req.swagger.params['search'].value;
  Auser.ausersGET(limit,offset,search)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
