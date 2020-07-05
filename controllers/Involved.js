'use strict';

var utils = require('../utils/writer.js');
var Involved = require('../service/InvolvedService');

module.exports.involvedsGET = function involvedsGET (req, res, next) {
  var limit = req.swagger.params['limit'].value;
  var offset = req.swagger.params['offset'].value;
  var search = req.swagger.params['search'].value;
  Involved.involvedsGET(limit,offset,search)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
