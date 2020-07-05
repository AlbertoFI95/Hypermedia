'use strict';

var utils = require('../utils/writer.js');
var Volunteer = require('../service/VolunteerService');

module.exports.volunteersBecomePOST = function volunteersBecomePOST(req, res, next) {
  var email = req.swagger.params['email'].value;
  var name = req.swagger.params['name'].value;
  var surname = req.swagger.params['surname'].value;

  Volunteer.volunteersBecomePOST(email, name, surname)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.volunteersRegisterPOST = function volunteersRegisterPOST(req, res, next) {
  var email = req.body.email;
  var name = req.body.name;
  var surname = req.body.surname;
  var phoneNumber = req.body.phoneNumber;
  var gender = req.body.gender;
  var birthDate = req.body.birthDate;
  var description = req.body.description;

  Volunteer.volunteersBecomePOST(email,
    name,
    surname,
    phoneNumber,
    gender,
    birthDate,
    description)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.volunteersEmailGET = function volunteersEmailGET(req, res, next) {
  var email = req.swagger.params['email'].value;
  Volunteer.volunteersEmailGET(email)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.volunteersGET = function volunteersGET(req, res, next) {
  var limit = req.swagger.params['limit'].value;
  var offset = req.swagger.params['offset'].value;
  var search = req.swagger.params['search'].value;
  Volunteer.volunteersGET(limit, offset, search)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
