let{presentedDBSetup} = require("./PresentedService");
    const sqlDBPRFactory = require("knex");
    let sqlDBPR = sqlDBPRFactory({
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
function setupDataLayerPR(){
    console.log("Setting up data layer");
    return presentedDBSetup(sqlDBPR);
	}
							   
module.exports = {database : sqlDBPR, setupDataLayerPR};