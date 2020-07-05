let{serviceDBSetup} = require("./ServiceService");
    const sqlDBSFactory = require("knex");
    let sqlDBS = sqlDBSFactory({
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
function setupDataLayerS(){
    console.log("Setting up data layer");
    return serviceDBSetup(sqlDBS);
	}
							   
module.exports = {database : sqlDBS, setupDataLayerS};