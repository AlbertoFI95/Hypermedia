'use strict';

let sqlDB;
exports.volunteerDBSetup = function (connection) {
  sqlDB = connection;
  console.log("check if volunteerTable exixt");
  return sqlDB.schema.hasTable("volunteer").then((exists) => {
    if (!exists) {
      console.log("it doesen't exixts, create it");
      return sqlDB.schema.createTable("volunteer", table => {
        table.increments();
        table.text("email");
        table.text("name");
        table.text("surname");
        table.text("description");
        table.float("desc");
        table.text("picture");
        table.text("phoneNumber");
        table.enum("gender", ["Male", "Female", "Other"]);
        table.text("birthDate");
      });
    } else { console.log("exixt"); };
  });
};
/**
 * Became a volunteer
 * complete the form
 *
 * email String 
 * name String 
 * surname String 
 * no response value expected for this operation
 **/
exports.volunteersBecomePOST = function (email,
  name,
  surname,
  phoneNumber,
  gender,
  birthDate,
  description) {
  const volunteer = {
    email,
    name,
    surname,
    phoneNumber,
    gender,
    birthDate,
    description
  }
  sqlDB('volunteer').insert(volunteer).then(() => console.log("volunteer registred!"))
    .catch((err) => { console.log(err); throw err })
    .finally(() => {
      sqlDB.destroy();
    });
  return new Promise(function (resolve, reject) {
    resolve();
  });
}


/**
 * get the volunteers
 * how we get the email of a volunteer
 *
 * email String name of the selected volunteer
 * returns List
 **/
exports.volunteersEmailGET = function (email) {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = [{
      "image": "image",
      "imageV": "imageV",
      "phoneNumber": 5,
      "gender": "F",
      "surname": "Fiorucci",
      "name": "Alberto",
      "birthDate": {
        "month": 0,
        "day": 6,
        "years": 1
      },
      "email": "alberto.polimi@polimit.it",
      "desc": 5
    }, {
      "image": "image",
      "imageV": "imageV",
      "phoneNumber": 5,
      "gender": "F",
      "surname": "Fiorucci",
      "name": "Alberto",
      "birthDate": {
        "month": 0,
        "day": 6,
        "years": 1
      },
      "email": "alberto.polimi@polimit.it",
      "desc": 5
    }];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * get the volunteers
 * how we get the volunteer
 *
 * limit String name of the selected volunteer (optional)
 * offset String Pagination offset. Default is none (optional)
 * search String search a volunteer (optional)
 * returns List
 **/
exports.volunteersGET = function (limit, offset, search) {

  return sqlDB.from("volunteer").select("*").limit(limit).offset(offset).then((data) => {

    return (data).map((e) => {
      console.log(e);
      return e;
    });

  })

}