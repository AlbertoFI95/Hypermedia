'use strict';
let sqlDBPR;
exports.presentedDBSetup = function(connection){
  sqlDBPR = connection;
    console.log("check if eventTable exixt");
    return sqlDBPR.schema.hasTable("presented").then((exists)=>{
        if(!exists){
            console.log("it doesen't exixts, create it");
            return sqlDBPR.schema.createTable("presented",table=>{
                table.increments();
                table.text("id_service");
                table.text("id_event");
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
exports.presentedGET = function(limit,offset,search) {
  return sqlDBPR.from("presented").select("*").limit(limit).offset(offset).then((data) => {

    return (data).map((e) => {
      console.log(e);
      return e;
    });
      
})
}