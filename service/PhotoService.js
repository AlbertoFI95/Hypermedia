'use strict';

let sqlDBP;
exports.photoDBSetup = function(connection){
  sqlDBP = connection;
    console.log("check if volunteerTable exixt");
    return sqlDBP.schema.hasTable("photo").then((exists)=>{
        if(!exists){
            console.log("it doesen't exixts, create it");
            return sqlDBP.schema.createTable("photo",table=>{
                table.increments();
                table.text("id_photo");
                table.text("picture");
            });
        }else{console.log("exixt");};
    });
};
/**
 * get the volunteers
 * how we get the photo
 *
 * limit String photo (optional)
 * offset String Pagination offset. Default is none (optional)
 * search String search a photo (optional)
 * returns List
 **/
exports.photoGET = function(limit,offset,search) {
  return sqlDBP.from("photo").select("*").limit(limit).offset(offset).then((data) => {

    return (data).map((e) => {
		console.log(e);
      return e;
    });
      
})
}

