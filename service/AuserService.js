'use strict';
let sqlDBA;

exports.auserDBSetup = function(connection){
  sqlDBA = connection;
    console.log("check if auserTable exixt");
    return sqlDBA.schema.hasTable("auser").then((exists)=>{
        if(!exists){
            console.log("it doesen't exixts, create it");
            return sqlDBA.schema.createTable("auser",table=>{
                table.increments();
                table.text("phoneNumber");
                table.text("description");
                table.float("fax");
                table.text("picture");
                table.text("adress");
            });
        }else{console.log("exixt");};
    });
};

/**
 * get the descriprion of the Auser
 * how we get the description of the Auser
 *
 * describe String the description
 * returns String
 **/
exports.auserDescribeGET = function(describe) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * get the image of the Auser
 * how we get the image of the Auser
 *
 * imageA String the image
 * returns List
 **/
exports.auserImageAGET = function(imageA) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "address" : "Via emanuele conti",
  "describe" : "describe",
  "phone number" : 333798748,
  "fax" : 5551234,
  "imageA" : "imageA"
}, {
  "address" : "Via emanuele conti",
  "describe" : "describe",
  "phone number" : 333798748,
  "fax" : 5551234,
  "imageA" : "imageA"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * get the Auser information
 * how we get the auser info
 *
 * limit String phone number,fax,address (optional)
 * offset String Pagination offset. Default is none (optional)
 * search String search a specific volunteer (optional)
 * returns List
 **/
exports.ausersGET = function(limit,offset,search) {
return sqlDBA("auser").limit(limit).offset(offset).then((data)=>{

    return (data).map ((e)=>{
      e.phoneNumber={ valueOf:e.phoneNumber};
      return e;
      });
      
})
}

