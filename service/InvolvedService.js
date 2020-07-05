'use strict';
let sqlDBIS;
exports.involvedDBSetup = function(connection){
  sqlDBIS = connection;
    console.log("check if eventTable exixt");
    return sqlDBIS.schema.hasTable("involved").then((exists)=>{
        if(!exists){
            console.log("it doesen't exixts, create it");
            return sqlDBIS.schema.createTable("involved",table=>{
                table.increments();
                table.text("id_service");
                table.text("email");
            });
        }else{console.log("exixt");};
    });
};

/**
 * get the event
 * how we get the event
 *
 * limit String id of the event (optional)
 * offset String Pagination offset. Default is none (optional)
 * search String search a Event (optional)
 * returns List
 **/
exports.involvedsGET = function(limit,offset,search) {
  return sqlDBIS.from("involved").select("*").limit(limit).offset(offset).then((data) => {

    return (data).map((e) => {
      console.log(e);
      return e;
    });
})
}