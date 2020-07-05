'use strict';
let sqlDBS;
exports.serviceDBSetup = function(connection){
  sqlDBS = connection;
    console.log("check if eventTable exixt");
    return sqlDBS.schema.hasTable("service").then((exists)=>{
        if(!exists){
            console.log("it doesen't exixts, create it");
            return sqlDBS.schema.createTable("service",table=>{
                table.increments();
                table.text("id_service");
                table.text("text");
                table.text("profile");
            });
        }else{console.log("exixt");};
    });
};

/**
 * get the service
 * how we get the service
 *
 * limit String the service (optional)
 * offset String Pagination offset. Default is none (optional)
 * search String search a service (optional)
 * returns List
 **/
exports.serviceGET = function(limit,offset,search) {
  return sqlDBS.from("service").select("*").limit(limit).offset(offset).then((data) => {

    return (data).map((e) => {
      console.log(e);
      return e;
    });
      
})
}

