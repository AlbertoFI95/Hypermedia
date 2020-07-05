'use strict';
let sqlDBE;
exports.eventDBSetup = function(connection){
  sqlDBE = connection;
    console.log("check if eventTable exixt");
    return sqlDBE.schema.hasTable("event").then((exists)=>{
        if(!exists){
            console.log("it doesen't exixts, create it");
            return sqlDBE.schema.createTable("event",table=>{
                table.increments();
                table.text("id_event");
                table.text("textual_presentation");
                table.text("practical_info");
                table.text("picture");
               	table.text("data");
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
exports.eventGET = function(limit,offset,search) {
  return sqlDBE.from("event").select("*").limit(limit).offset(offset).then((data) => {

    return (data).map((e) => {
      console.log(e);
      return e;
    });
      
})
}

