'use strict';

var utils = require('../utils/writer.js');
var Event = require('../service/EventService');

module.exports.eventGET = function eventGET (req, res, next) {
  var limit = req.swagger.params['limit'].value;
  var offset = req.swagger.params['offset'].value;
  var search = req.swagger.params['search'].value;
  Event.eventGET(limit,offset,search)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
