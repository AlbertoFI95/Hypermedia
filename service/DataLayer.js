let{volunteerDBSetup} = require("./VolunteerService");
    const sqlDBFactory = require("knex");
    let sqlDB = sqlDBFactory({
        client : "pg",
        debug : true ,
		ssl : true,
        connection : {
    host : '127.0.0.1',
    user : 'postgres',
    password : 'janenba1',
    database : 'postgres'
  }
        
    });



        



        
function setupDataLayer(){
    console.log("Setting up data layer");
    return volunteerDBSetup(sqlDB);
}

module.exports = {database : sqlDB, setupDataLayer};




		
		

