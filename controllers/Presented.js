'use strict';

var utils = require('../utils/writer.js');
var Presented = require('../service/PresentedService');

module.exports.presentedGET = function presentedGET (req, res, next) {
  var limit = req.swagger.params['limit'].value;
  var offset = req.swagger.params['offset'].value;
  var search = req.swagger.params['search'].value;
  Presented.presentedGET(limit,offset,search)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
